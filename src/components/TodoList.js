import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
