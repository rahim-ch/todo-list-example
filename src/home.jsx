import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, currentTodo]);
    setCurrentTodo('');
  };

  const updateTodo = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index] = newValue;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="border rounded py-2 px-3 mr-2"
          value={currentTodo}
          onChange={handleInputChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addTodo}>
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="text"
              className="border rounded py-2 px-3 mr-2"
              value={todo}
              onChange={(event) => updateTodo(index, event.target.value)}
            />
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
