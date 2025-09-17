import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      content: input.trim(),
      checked: false,
    };

    onAddTodo(newTodo);   // send object to parent
    setInput("");         // reset input
  };

  return (
    <section className="form-section">
      <form className="form-box" onSubmit={handleSubmit}>
        <div className="input-button-container">
          <input
            type="text"
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
          />
          <button className="btn-add" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
