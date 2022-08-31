import React from "react";
import './TodoSearch.css';


const TodoSearch = ({searchValue, setSearchValue}) => {
    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }
    return [
        <input 
        className="TodoSearch" 
        type="text" 
        placeholder="buy onions"
        value={searchValue}
        onChange={onSearchValueChange}
         />
    ];
}

export {TodoSearch}