import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoList} from "./TodoList";
import {TodoSearch} from "./TodoSearch";
import { TodoItem } from "./TodoItem"
import {CreateTodoButtom} from "./CreateTodoButton";
// import './App.css';

const todos = [
  { text: 'Cut onion', completed: true},
  { text: 'take classes', completed: false },
  { text: 'buy milk', completed: false}
]
function App() {
  const [searchValue, setSearchValue ] = React.useState('');
  return (
    <React.Fragment>
     <TodoCounter />
      <TodoSearch 
        searchValue={searchValue}
         setSearchValue={setSearchValue}
      />
      {<TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>}
      {<CreateTodoButtom />}
    </React.Fragment>
  );
}

export default App;
