import React, { useState, useEffect } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoClock } from "./TodoClock";

export const Todo = () => {
  // Load tasks from localStorage (key = "tasks")
  const [tasks, setTasks] = useState(() => {
    const rawtodo = localStorage.getItem("tasks");
    return rawtodo ? JSON.parse(rawtodo) : [];
  });

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add
  const handleAddTodo = (newTask) => {
    const { id, content, checked } = newTask;
    if (!content.trim()) return;

    const iftodo = tasks.find((t) => t.content === content);
    if (iftodo) return;

    setTasks((prev) => [...prev, { id, content, checked }]);
  };

  // Delete
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  // Toggle check/uncheck
  const handleToggle = (taskId) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, checked: !t.checked } : t
      )
    );
  };

  // Clear all
  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <section className="app">
      <header className="header">
        <h1 className="title">Todo List</h1>
      </header>

      <TodoClock />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        tasks={tasks}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onClear={handleClearAll}
      />
    </section>
  );
};
