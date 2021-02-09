import React from 'react'
import {useState} from 'react'
import { Button } from 'react-bootstrap';
import FormtoDo from './FormtoDo';
import Todo from './Todo'

function TodoList({}) {
    const [todos, setTodos] = useState([
        {
        text: 'sleep',
        checked: 'false'
        },    
        {
          text: 'eat',
          checked: 'false'
        },
        {
          text: 'code',
          checked: 'false'
        },    
        {
          text: 'work-out',
          checked: 'false'
        },
        {
          text: 'do everything above again',
          checked: 'false'
        },
      ]); 

      const addValue = (text)=>{
      //console.log(todos)
      const newInp = [...todos, {text}];
      //console.log(todos, "some")
       setTodos(newInp);
      }
      const checkVal =(index)=>{
        const doneTodo =[...todos];
        doneTodo[index].checked = !doneTodo[index].checked;
        //console.log(doneTodo, '======>after');
        setTodos(doneTodo);
      }
    
      const removeTodo=(index)=>{
        const remove = [...todos];
        remove.splice(index, 1);
        //console.log(remove);
        setTodos(remove);
      }
    
    
      const removeAll=(e)=>{
        e.preventDefault();
        setTodos([])
      }
    
    return  (
    <div className='container-todo'>
        <h1>What's Your TODO</h1>
        <div className = "container">
            <FormtoDo addValue ={addValue}/>       
            <div className = "list-container">
              {todos.length > 0 ?
            todos.map((todo,index) => 
            <Todo key={index}
            todo ={todo} 
            index = {index}
            completedTodo = {checkVal} 
            removeTodo ={removeTodo}
            />)
            : <li className = "no-todos">No Todos</li>}
        </div>
    </div>
    <div><Button variant = "outline"onClick ={removeAll} className = "remove-all">Remove all</Button></div>
</div>
)
}

export default TodoList;

