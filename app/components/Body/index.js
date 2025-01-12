// this is my parent node, // src/components/TodoApp.js
'use client'
import React, { useState } from 'react';
import useStore from '../store/useStore';
import ChildNode from './ChildNode'
const TodoApp = () => {
    
  const [newTodo, setNewTodo] = useState('');
  const addTodo = useStore(state => state.addTodo);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };
  return (
    <div>
      <h1 className='text-2xl  font-bold mb-4'>To-Do List</h1>
      <input
        type="text"
        className='border-2 border-gray-300 rounded-md p-2'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new to-do"
      />
      <button className='bg-blue-500 ms-2 text-white p-2 rounded-md' onClick={handleAddTodo}>Add</button>
     <ChildNode />
    </div>
  );
};

export default TodoApp;
