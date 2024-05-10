import React, { useState } from "react";
import DataServices from "../services/data-services";

export default function TodoForm() {
  let dataService = new DataServices();
  let [formData, setFormData] = useState({
    title: "",
    completed: false,
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    dataService.addTodo({ formData });

    // setFormData((prevState) => ({
    //   ...prevState,
    //   setFormData,
    // }));

    setFormData({
      title: "",
      completed: false,
    });
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={formData.title}
        name="title"
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
      />
    </form>
  );
}
