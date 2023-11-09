// App.js
import React, { useEffect, useState } from "react";
import { fetchTodos } from "./api";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import FilterButton from "./FilterButton";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Fetch initial todos from the API
    fetchTodos()
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Failed to fetch todos:", error);
      });
  }, []);

  const addTodo = (title) => {
    const newTodo = {
      userId: 1, // Assuming a fixed userId
      id: todos.length + 1, // Generate a unique id
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos =
    filter === "completed" ? todos.filter((todo) => todo.completed) : todos;

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <FilterButton filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
