import React from "react";
import './TodoSearch.css';


const TodoSearch = () => {
    const onSearchValueChange = (event) =>{
        console.log(event.target.value)
    }
    return (
        <input 
        className="TodoSearch" 
        type="text" 
        placeholder="buy onions"
        onChange={onSearchValueChange}
         />
    );
}

export {TodoSearch}