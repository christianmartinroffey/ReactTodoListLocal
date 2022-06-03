import React, { useState } from "react";


const Todo = ({text, todo, todos, setTodos}) => {

    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };

    const deleteHandler = () => {
        
        setTodos(todos.filter(element => element.id !== todo.id))
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
    <li className={`todo-item form-control  ${todo.completed ? "completed" : ""}`} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}>{text}</li>
    <button onClick={completedHandler} className="input-group-text completed-btn m-2 bg-success">
        {isHovering && <i className=" fas fa-check"></i>}
    </button>
    <button onClick={deleteHandler} className="input-group-text delete-btn m-2 bg-danger">
    {isHovering && <i className="fas fa-regular fa-trash"></i>}
    </button>
</div>
);

};

export default Todo;