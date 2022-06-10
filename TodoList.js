import React from "react";
import Todo from "./Todo";


const TodoList = ({todos, setTodos, filteredTodos}) => {
    if(!todos || todos.length === 0){
        return <h2 className="bg-warning text-center">Add your first todo item</h2>
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