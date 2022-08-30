import React from "react";
import {TodoCounter} from "./TodoCounter";
// import './App.css';

const todos = [
  { text: 'Cut onion', completed: false},
  { text: 'take classes', completed: false },
  { text: 'buy milk', completed: false}
]
function App() {
  return (
    <React.Fragment>
     <TodoCounter />
      {/* {<todoSearch />} */}
      <input type="text" placeholder="Onion"/>
      <button> + </button>
{/* {      <todoList>
        {todos.map(todo => (
          <todoItem />
        ))}
      </todoList>} */}
      {/* {<CreateTodoButton />} */}
    </React.Fragment>
  );
}

export default App;
