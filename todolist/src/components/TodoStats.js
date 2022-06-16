import React, { useState } from 'react';

let text = "a string";

function TodoStats( {todos} ) {
  if(todos === 0){
    return <h2>{text}</h2>
  }
    console.log(todos.length, "checking length")
  return (
    <div className='todo-stats'>
      <h4>Total todos: {(todos.length)}</h4>
    </div>
  )
}

export default TodoStats;
