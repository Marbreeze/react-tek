import React from 'react'
import {useState} from 'react';

function FormtoDo({addValue}) {
    const [value, setValue] = useState('');


    const handleSubmit=(e)=>{
      e.preventDefault(e);
      if (!value) return;
      addValue(value)
      setValue('');
    }
    const handleChange=(e)=>{
       const val =  e.target.value;
       setValue(val)
    
    }
    return ( 
        <form className ="todo-form" onSubmit = {handleSubmit}>
            <input type = 'text' 
            value = {value}
            placeholder = {'Enter your todo ...'}
            onChange ={handleChange}
            className = "todo-input">
            </input>
        </form>
      )
  }
  
  export default FormtoDo;