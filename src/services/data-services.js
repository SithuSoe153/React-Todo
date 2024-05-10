class DataServices {
  addTodo({ formData }) {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  deleteTodo(todoId) {
    fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "DELETE",
    });
  }

  updateTodo(data) {
    fetch(`http://localhost:3001/todos/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

export default DataServices;
