import "./reset.css";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckAllAndRemainding from "./components/CheckAllAndRemainding";
import TodoFilters from "./components/TodoFilters";
import ClearComplicatedBtn from "./components/ClearComplicatedBtn";
import { useCallback, useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);

  let [filterTodos, setFilterTodos] = useState(todos);

  let filterBy = useCallback(
    (filter) => {
      if (filter === "All") {
        setFilterTodos(todos);
      }
      if (filter === "Active") {
        setFilterTodos(todos.filter((t) => !t.completed));
      }
      if (filter === "Completed") {
        setFilterTodos(todos.filter((t) => t.completed));
      }
    },
    [todos]
  );

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
        setFilterTodos(todos);
      });
  }, []);

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm setTodos={setTodos} todos={todos} />

        <TodoList todos={filterTodos} />

        <CheckAllAndRemainding todos={todos} />

        <div className="other-buttons-container">
          <TodoFilters filterBy={filterBy} />

          <ClearComplicatedBtn todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
