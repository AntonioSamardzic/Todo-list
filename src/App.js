/** @format */
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoAddForm from './components/TodoAddForm';
import TodoList from './components/TodoList';
import UserName from './components/UserName';
import firebase from './components/firebase';

function App() {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoAssignmentRef = firebase.database().ref('todo');
    todoAssignmentRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      console.log(todoList);
      setTodoList(todoList);
    });
  }, []);

  return (
    <div className='App'>
      <UserName />
      <TodoAddForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

