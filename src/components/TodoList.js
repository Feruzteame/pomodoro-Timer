import React, { useEffect, useState } from 'react';
import 'animate.css';

import { confirmAlert } from 'react-confirm-alert';  
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import Cancel from '../Image/cancel.svg'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo('');
  }

  function toggleDone(index) {
    setTodos([
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1),
    ]);
  }

  function editTodoText(index, newText) {
    if (newText.trim() === '') return;
    setTodos([
      ...todos.slice(0, index),
      { ...todos[index], text: newText },
      ...todos.slice(index + 1),
    ]);
  }

  function deleteTodo(index) {
    confirmAlert({
    title: 'Confirm deletion',
    message: 'Are you sure you want to delete this list?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
          setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
        }
      },
      {
        label: 'No',
        onClick: () => {
          return;
        }
      }
    ]
    });
  }

  function deleteAllTodos() {
    confirmAlert({
    title: 'Confirm deletion',
    message: 'Are you sure you want to delete all your list?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
           setTodos([]);
        }
      },
      {
        label: 'No',
        onClick: () => {
          return;
        }
      }
    ]
    });
  }

  return (
    <div className='flex flex-col justify-center gap-10 p-10 md:p-20 text-white'>
       <p className='md:hidden text-2xl text-black'>Add Your Daily List Here</p>
      <div className='flex justify-between lg:px-48 gap-2'>
        <p className='hidden md:flex text-2xl text-black'>Add Your Daily List Here</p>
        <button
        className='flex justify-center w-[150px] gap-2 px-4 py-1 bg-red-400 text-white rounded shadow-sm shadow-black hover:text-black'
        onClick={deleteAllTodos}>
          Delete All
        </button>
        <button
        className='md:hidden self-center w-[100px] px-4 py-1 bg-red-400 text-white rounded shadow-sm shadow-black hover:text-black'
        onClick={addTodo}>
          Add
        </button>
      </div>
      <div className='flex justify-center gap-4 text-black'>
        <input className='w-[100%] border-2 border-solid border-black md:w-[40%] h-10 rounded p-2 '
        placeholder='Put your list here'
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        />
        <button
        className='hidden md:flex self-center w-[100px] px-4 py-1 bg-red-400 text-white rounded shadow-sm shadow-black hover:text-black'
        onClick={addTodo}>
          Add
        </button>
      </div>
      <div className='flex flex-col justify-center self-center gap-4'>
        {todos.map((todo, index) => (
        <div
        className='flex gap-4  odd:bg-red-400 even:bg-red-300 px-4 rounded-md animate__animated animate__zoomIn animate__faster'
        key={index}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleDone(index)}
          />
          <input
            className='w-full md:w-[350px] bg-transparent m-4'
            type="text"
            value={todo.text}
            onChange={(event) => editTodoText(index, event.target.value)}
          />
          <button className='' onClick={() => deleteTodo(index)}>
            <img src={ Cancel } className='md:w-8 md:h-8' />
          </button>
        </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;