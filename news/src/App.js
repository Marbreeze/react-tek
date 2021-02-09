import './App.css';
import {React, useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Business from './Views/Business';
import Technology from './Views/ Technology';
import Finance from './Views/Finance';
import Footer from './Components/Footer';

function App() {

  const [news, setNews] = useState([]);
  const [bussines, setBussiness] = useState([]);
  const [teck, setTeck] = useState([]);
  const [finance, setFinance] = useState([]);


//topnews
  const urlHEadlines = 'http://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=f698812ac2cb430081b80e4d0f4912e6';
  // console.log(urlHEadlines);

useEffect(() => {
  getNews();
}, []) 

const getNews = async () =>{
  const response = await axios.get(`${urlHEadlines}`)
    // console.log(response, "myres")
    setNews(response.data.articles)
  
}
//-----------

//business
const urlBussiness = 'http://newsapi.org/v2/top-headlines?' + 
'country=us&'+
'category=business&'+
'apiKey=f698812ac2cb430081b80e4d0f4912e6';

useEffect(() => {
  getBussinessNews();
}, [])

const getBussinessNews= async () =>{
  const response = await axios.get(`${urlBussiness}`)
  // console.log(response, "bussiness----------------")
  setBussiness(response.data.articles)
}


//teck
const urlTeck = 'https://newsapi.org/v2/everything?domains=techcrunch.com,'+
'thenextweb.com&'+
'apiKey=f698812ac2cb430081b80e4d0f4912e6'

useEffect(() => {
  getTeckNews();
}, [])

const getTeckNews= async () =>{
  const response = await axios.get(`${urlTeck}`)
  // console.log(response, "teck----------------")
  setTeck(response.data.articles)
}




//finance

const urlFinance = 'https://newsapi.org/v2/everything?'+
'q=bitcoin&'+
'apiKey=f698812ac2cb430081b80e4d0f4912e6'

useEffect(() =>{
  getFinance()
},[])

const getFinance = async () =>{
  const response = await axios.get(`${urlFinance}`)
  // console.log(response, "finance------------")
  setFinance(response.data.articles)
}



  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar/>
        <div className = "pages">
         <Switch>

           <Route exact path = "/">
             {news.map((article, i) => <Headlines key ={i} 
             title ={article.title} 
             image = {article.urlToImage} 
             content = {article.content} 
             url = {article.url}/>)}
            </Route> 

           <Route path = "/business">
             {bussines.map((article, i) =><Business key = {i} 
             title = {article.title}
             content = {article.content}
             image = {article.urlToImage}
             url= {article.url}
             />)}
           </Route>

            <Route path = "/teck"> 
            {teck.map((article, i ) => <Technology key = {i} 
            title = {article.title} 
            content = {article.content}
            image = {article.urlToImage}
            url = {article.url}
            />)}
            </Route>

           <Route path = "/finance">
             {finance.map((article, i)=><Finance key = {i} 
             title = {article.title} 
             content = {article.content} 
             url = {article.url}  
             image = {article.urlToImage}
            />)}
            </Route>

         </Switch>
        </div>
        </Router>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
