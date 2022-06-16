import { filter } from "fontawesome";
import React, { useState } from "react";


const Todo = ({text, todo, todos, setTodos, todoindex}) => {

    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(true);
      };

    const deleteHandler = () => {
        console.log(todoindex, "indextodelete")
        const filteredTodos = todos.filter((_, index) => index !== todoindex)
        console.log(filteredTodos, "filtered")
        if(window.confirm("Are you sure you want to delete?")){
            setTodos(filteredTodos);
            fetch('https://assets.breatheco.de/apis/fake/todos/user/christianmr', {
                method: "PUT",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(filteredTodos)  
                
            })
            .then(() => {console.log(filteredTodos, "filteredTodos sent")});
        }
        
    };

    const completedHandler = () => {
        const filteredComplete = todos.map((item, index ) => {
            if(index === todoindex){
            return {
                ...item, done: !item.done
            };
        }
            return item;
        });
        setTodos(filteredComplete);
        fetch('https://assets.breatheco.de/apis/fake/todos/user/christianmr', {
            method: "PUT",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(filteredComplete)  
            
        })
        .then(() => {console.log(filteredComplete, "filteredcomplete sent")});
    };

return (

<div className="container pt-2 d-flex">
    <li className={`todo-item form-control d-flex me-auto ${todo.done ? "completed" : ""}`} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}>{text}
       <div className=" d-flex ms-auto">
        <div className=" justify-content-start">{todo.label}</div>
        <button onClick={completedHandler} className="input-group-text completed-btn m-2 justify-content-end">
            {isHovering && <i className="fas fa-check"></i>}
        </button>
        <button onClick={deleteHandler}  className="input-group-text delete-btn m-2 justify-content-end">
        {isHovering && <i className="fas fa-regular fa-trash"></i>}
        </button>
        </div> 
    </li>
</div>
);

};

export default Todo;