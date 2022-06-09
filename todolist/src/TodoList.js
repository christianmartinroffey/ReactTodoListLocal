import React from "react";
import Todo from "./Todo";


const TodoList = ({todos, setTodos, filteredTodos}) => {
    if(!todos || todos.length === 0){
        return <p>add your todo</p>
    }

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo text={todo.text} key={todo.id} setTodos={setTodos} todos={todos} todo={todo}/>
                ))}
            </ul>
        </div>
            
    )
};

export default TodoList;