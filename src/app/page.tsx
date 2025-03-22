"use client";
import React, { useState } from "react";

const Page = () => {
  const [todos, setTodos] = useState(["Praying", "Fasting", "Reciting"]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    if (!newTodo) return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function removeTodo(index: number) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Todo List
        </h1>

        <div className="flex gap-2">
          <input
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new todo"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

        <ul className="mt-4 space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-gray-200 p-2 rounded-lg text-gray-800 flex justify-between items-center"
            >
              {todo}
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                onClick={() => removeTodo(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
