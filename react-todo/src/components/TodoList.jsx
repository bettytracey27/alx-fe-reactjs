import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: true },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    const text = newTodo.trim();
    if (!text) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id, e) => {
    e.stopPropagation(); // prevent triggering toggle when deleting
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm value={newTodo} onChange={setNewTodo} onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {todo.text}
            <button onClick={(e) => deleteTodo(todo.id, e)} style={{ marginLeft: 8 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
