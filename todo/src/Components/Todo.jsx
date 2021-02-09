import React from 'react';
import {Button} from 'react-bootstrap'

function Todo({index, todo, completedTodo, removeTodo}){

      const removeButton=()=>{
        console.log('clicked here')
        removeTodo(index);
        
    }
     
    const handleClick=(e)=>{
        completedTodo(index);
    }

    return(
        <div style={{ overflowWrap: "break-word"}}>
                <li className = "todo-row">
                    <span className = "todo-text">{todo.text}</span>
                <Button variant = "outline-light"onClick={handleClick} className = {todo.checked === true ? "active" : ""} >DONE</Button>
                <button className='remove' onClick={removeButton}><i className="far fa-trash-alt fa-sm trashIcon" ></i></button>
                </li>
        </div>
    )
}
export default Todo;