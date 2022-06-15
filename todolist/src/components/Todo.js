import React, { useState } from "react";


const Todo = ({text, todo, todos, setTodos}) => {

    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(true);
      };

    const deleteHandler = () => {
        if(window.confirm("Are you sure you want to delete?"))
        setTodos(todos.filter((element) => element.id !== todo.id))
    };

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
            return {
                ...item, done: !item.done
            };
        }
            return item;
        })
    )};

return (

<div className="container pt-2 d-flex">
    <li className={`todo-item form-control d-flex me-auto ${todo.done ? "completed" : ""}`} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}>{text}
       <div className=" d-flex ms-auto">
        <div className=" justify-content-start">{todo.label}</div>
        <button onClick={completedHandler} className="input-group-text completed-btn m-2 justify-content-end">
            {isHovering && <i className="fas fa-check"></i>}
        </button>
        <button onClick={deleteHandler} className="input-group-text delete-btn m-2 justify-content-end">
        {isHovering && <i className="fas fa-regular fa-trash"></i>}
        </button>
        </div> 
    </li>
</div>
);

};

export default Todo;