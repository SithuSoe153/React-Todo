import React from "react";
import DataServices from "../services/data-services";

export default function CheckAllAndRemainding({ todos }) {
  let dataService = new DataServices();
  let remainingCount = todos.filter((todo) => !todo.completed).length;

  let checkAllHandler = () => {
    const allCompleted = todos.every((t) => t.completed);

    todos.forEach((t) => {
      t.completed = true;
      dataService.updateTodo(t);
    });
  };
  return (
    <div className="check-all-container">
      <div>
        <div onClick={checkAllHandler} className="button">
          Check All
        </div>
      </div>

      <span>
        {remainingCount} item{remainingCount > 1 ? "s" : ""} remaining
      </span>
    </div>
  );
}
