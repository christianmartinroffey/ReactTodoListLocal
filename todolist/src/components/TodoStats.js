import React from 'react'


function TodoStats(todos, setTodos) {
    console.log(todos.length, "checking length")
  return (
    <div className='todo-stats'>
      <h4>{todos.length}</h4>
    </div>
  )
}

export default TodoStats
