import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoList} from "./TodoList";
import {TodoSearch} from "./TodoSearch";
import { TodoItem } from "./TodoItem"
import {CreateTodoButtom} from "./CreateTodoButton";
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
      {<TodoSearch />}
      {<TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>}
      {<CreateTodoButtom />}
    </React.Fragment>
  );
}

export default App;
