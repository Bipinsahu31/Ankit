import React from 'react';
import {TodoItem} from './MyComponents/TodoItem';
export const  Todos = (props) => {
  return (
    <div className="Container"> 
       <h3>Todos List</h3>
        <TodoItem todo={TodoItem[0]}/>
    </div>
  )
}
