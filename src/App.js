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

  let searchedTodos = [];

  if (!setSearchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [... todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);

  const newTodos = [... todos];
  newTodos.splice(todoIndex, 1);
  setTodos(newTodos);
};

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
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>}
      {<CreateTodoButtom />}
    </React.Fragment>
  );
}

export default App;
