import React from "react";
import './TodoCounter.css';



const TodoCounter = ({total, completed}) =>  {
    return (
        <h2 className="TodoCounter">You have finished {completed} of {total} ToDos</h2>
    );
}

export { TodoCounter };