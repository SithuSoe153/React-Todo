import React, { useState } from "react";
import DataServices from "../services/data-services";

export default function Todo({ todo }) {
  let dataService = new DataServices();
  let [isEdit, setIsEdit] = useState(false);
  let [title, setTitle] = useState(todo.title);

  let editTodoHandler = (e) => {
    e.preventDefault();

    const data = {
      id: todo.id,
      title: title,
      completed: todo.completed,
    };

    dataService.updateTodo(data);

    // dataService.updateTodo(todo.id);

    setIsEdit(false);
  };

  let toggleCheckbox = () => {
    const data = {
      id: todo.id,
      title: todo.title,
      completed: !todo.completed,
    };
    dataService.updateTodo(data);
  };

  return (
    <li
      className={`todo-item-container ${todo.completed ? "line-through" : ""}`}
      key={todo.id}
    >
      <div className="todo-item">
        <input
          type="checkbox"
          checked={todo.completed ? true : false}
          onChange={toggleCheckbox}
        />
        {!isEdit && (
          <span
            onDoubleClick={() => setIsEdit(true)}
            className="todo-item-label"
          >
            {todo.title}
          </span>
        )}
        {isEdit && (
          <form onSubmit={editTodoHandler}>
            <input
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="todo-item-input"
            />
          </form>
        )}
      </div>
      <button
        onClick={() => dataService.deleteTodo(todo.id)}
        className="x-button"
      >
        <svg
          className="x-button-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}
