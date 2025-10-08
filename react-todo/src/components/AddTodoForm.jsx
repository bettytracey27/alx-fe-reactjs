import React from 'react';

export default function AddTodoForm({ value, onChange, onAdd }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onAdd(); }}>
      <input
        placeholder="Add a new todo"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
