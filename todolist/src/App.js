import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Hover from "./components/Hover";



function App() {


//states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use effect
useEffect(() => {
  filterHandler()
}, [todos, status]);

//functions
const filterHandler = () => {
  switch(status){
  case 'completed': setFilteredTodos(todos.filter(todo => todo.completed === true));
  break;
  case 'incompleted' : setFilteredTodos(todos.filter(todo => todo.completed === false));
  break;
  default:  setFilteredTodos(todos);
  break;
}
}
//save to local storage
const saveLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalStorage = () => {
  if(localStorage.getItem("todos") === null){
    localStorage.setItem("todos", JSON.stringify([]));
  }
  else {
    let todoLocal = JSON.parse(localStorage.getItem("todos")); 
    setTodos(todoLocal);
  }
};

  return (
    <div className="App bg-light container position-absolute top-50 start-50 translate-middle">
      <header>
        <div className='container '>
            <h1 className='bg-light p-3 '>
              Your Todo List
            </h1>
            <Form inputText= {inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
            <TodoList todos={todos} setTodos ={setTodos} filteredTodos={filteredTodos}/>
            
        </div>
      </header>
    </div>
  );
}

export default App;
