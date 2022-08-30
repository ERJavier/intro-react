import React from "react";
import TodoCounter from "../ToDoCounter";
// import './App.css';

const todos = [
  { text: 'Cut onion', completed: false},
  { text: 'take classes', completed: false },
  { text: 'buy milk', completed: false}
]
function App() {
  return (
    <React.Fragment>
     {/* { <todoCounter />} */}
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
