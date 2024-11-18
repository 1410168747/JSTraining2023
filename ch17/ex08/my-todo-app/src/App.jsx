import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    setTodos([{ text: todo.trim(), completed: false }, ...todos]);
    setTodo("");
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form id="new-todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="new-todo"
          placeholder="What needs to be done?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul id="todo-list">
        {todos.map((item, index) => (
          <li key={index}>
            <div>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(index)}
              />
              <label
                style={{
                  textDecorationLine: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </label>
              <button onClick={() => handleDelete(index)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
