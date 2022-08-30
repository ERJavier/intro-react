import React from "react";

const styes = {
    color: 'white',
    backgroundColor: 'red'
};

const TodoCounter = () =>  {
    return (
        <h2 style={styes}>You have finished 2 of 3 ToDos</h2>
    );
}

export { TodoCounter };