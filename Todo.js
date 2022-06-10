import React, { useState } from "react";


const Todo = ({text, todo, todos, setTodos}) => {

    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = () => {
        setIsHovering(false);
      };
    
      const handleMouseOut = () => {
        setIsHovering(true);
      };

    const deleteHandler = () => {
        
        setTodos(todos.filter((element) => element.id !== todo.id))
    };

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
            return {
                ...item, completed: !item.completed
            };
        }
            return item;
        })
    )};

return (

<div className="container pt-2 d-flex">
    <li className={`todo-item form-control d-flex me-auto ${todo.completed ? "completed" : ""}`} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}>{text}
       <div className=" d-flex ms-auto">
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