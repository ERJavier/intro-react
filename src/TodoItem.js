import React from "react";
import './TodoItem.css';


const TodoItem = (props) => {
    const onComplete = () => {
        alert('Here is complete ' + props.text);
    }
    const onDelete = () => {
        alert('Here is deleted ' + props.text);
    }
    return(
        <li className="TodoItem">
            <span className="{`Icon Icon-check ${props.completed && 'Icon-check--active'}`}"
            onClick={onComplete}
            >√</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete"
            onClick={onDelete }
            >X</span>
        </li>
    );
}

export {TodoItem} ;