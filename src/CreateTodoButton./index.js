import react from "react";
import './CreateTodoButton.css';


const  CreateTodoButtom = (props) => {
    const onClickButton = (msg) => {
        alert(msg)
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('Here goes the model')}
        >
            +
        </button>
    );
}

export { CreateTodoButtom};