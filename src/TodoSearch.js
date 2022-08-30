import React from "react";
import './TodoSearch.css';


const TodoSearch = () => {
    const [searchValue, setSearchValue] = React.useState();
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
         />,
         <p>{searchValue}</p>
    ];
}

export {TodoSearch}