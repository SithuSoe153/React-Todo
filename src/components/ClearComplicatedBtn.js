import React from "react";
import DataServices from "../services/data-services";

export default function ClearComplicatedBtn({ todos }) {
  let dataService = new DataServices();

  let clearComplicatedHandler = () => {
    todos.forEach((t) => {
      if (t.completed) {
        dataService.deleteTodo(t.id);
      }
    });
  };

  return (
    <div>
      <button onClick={clearComplicatedHandler} className="button">
        Clear completed
      </button>
    </div>
  );
}
