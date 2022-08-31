import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoList} from "./TodoList";
import {TodoSearch} from "./TodoSearch";
import { TodoItem } from "./TodoItem"
import {CreateTodoButtom} from "./CreateTodoButton";
// import './App.css';

const defaultTodos = [
  { text: 'Cut onion', completed: true},
  { text: 'take classes', completed: false },
  { text: 'buy milk', completed: true}
]
function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue ] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
     <TodoCounter
     total={totalTodos}
     completed={completedTodos}
     />
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
