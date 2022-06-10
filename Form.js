import React, { useEffect } from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

    

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTextHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id:Math.random()*1000}]);
        setInputText("");
    };

    const statusHandler = (e) => {

        setStatus(e.target.value);

    }
    
 
    return(
        <form>
            <div className="container">
                <input onChange = {inputTextHandler} value={inputText} type="text" placeholder="Add your todo here" className="todo-input p-2 m-3"/>
                <button onClick={submitTextHandler} className = "todo-button border border-light bg-transparent" type="submit">
                <i className="fas fa-plus-square input-group-text"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo input-group-text p-2 m-3">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incompleted">Incomplete</option>
                    </select>
                </div>
            </div>
        </form>
    )
    
};

export default Form;