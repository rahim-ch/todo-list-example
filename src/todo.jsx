import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { title: event.target.title.value, completed: false }]);
    event.target.title.value = '';
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">Todo List</h1>

        <form onSubmit={addTodo}>
          <div className="flex mb-4">
            <input type="text" name="title" className="flex-1 border rounded py-2 px-3 mr-2" placeholder="Add todo..." />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          </div>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <li key={index} className={`flex justify-between items-center py-2 ${todo.completed ? 'bg-green-100' : ''}`}>
              <div className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.title}</div>
              <div className="flex items-center">
                <button
                  className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2`}
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
                <button
                  className={`${
                    todo.completed ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-green-500 hover:bg-green-700'
                  } text-white font-bold py-2 px-4 rounded`}
                  onClick={() => toggleCompleted(index)}
                >
                  {todo.completed ? 'Incomplete' : 'Complete'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
