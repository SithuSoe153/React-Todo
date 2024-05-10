import "./reset.css";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckAllAndRemainding from "./components/CheckAllAndRemainding";
import TodoFilters from "./components/TodoFilters";
import ClearComplicatedBtn from "./components/ClearComplicatedBtn";
import { useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);

  let [filterTodos, setFilterTodos] = useState(todos);

  let filterBy = () => {
    if (filter === "All") {
      setFilterTodos(todos);
    }
    if (filter === "Active") {
      setFilterTodos(todos.filter((todo) => !todo.completed));
    }
    if (filter === "Completed") {
      setFilterTodos(todos.filter((todo) => todo.completed));
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
      });
  });

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm />

        <TodoList todos={todos} />

        <CheckAllAndRemainding todos={todos} />

        <div className="other-buttons-container">
          <TodoFilters />

          <ClearComplicatedBtn todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
