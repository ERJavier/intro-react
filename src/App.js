import React from "react";
// import './App.css';

const todos = [
  {
    text: 'Cut onion', completed: false
  },
  { text: 'take classes', completed: false },
  { text: 'buy milk', completed: false}
]
function App() {
  return (
    <React.Fragment>
      <todoCounter />
      <h2>You have finished 2 of 3 ToDos</h2>
      <todoSearch />
      <input type="text" placeholder="Onion"/>
      <todoList>
        {todos.map(todo => (
          <todoItem />
        ))}
      </todoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
