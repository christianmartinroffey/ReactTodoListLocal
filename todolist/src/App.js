import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Counter from './components/TodoStats';


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

/// GET request

useEffect(() => {
  
    fetch('https://assets.breatheco.de/apis/fake/todos/user/christianmr', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        // console.log("this is the response",resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        setTodos(data); //this will print on the console the exact object received from the server
       console.log(data, "data");
      })
    .catch(error => {
        //error handling
        console.log(error, "this is an error");
    });
     
  },[]);
 
  useEffect(()=>{
    console.log({todos})
  }, [todos])
  
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
// //save to local storage
// const saveLocalStorage = () => {
//   localStorage.setItem("todos", JSON.stringify(todos));
// };

// const getLocalStorage = () => {
//   if(localStorage.getItem("todos") === null){
//     localStorage.setItem("todos", JSON.stringify([]));
//   }
//   else {
//     let todoLocal = JSON.parse(localStorage.getItem("todos")); 
//     setTodos(todoLocal);
//   }
// };

  return (
    <div className="App bg-light container position-absolute top-50 start-50 translate-middle">
      <header>
        <div className='container '>
            <h1 className='bg-light p-3 '>
              Your Todo List
            </h1>
            <Form inputText= {inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
            <Counter todos={todos} setTodos ={setTodos}/>
            <TodoList todos={todos} setTodos ={setTodos} filteredTodos={filteredTodos}/>
        </div>
      </header>
    </div>
  );
}

export default App;
