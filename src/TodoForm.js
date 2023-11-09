// TodoForm.js
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
