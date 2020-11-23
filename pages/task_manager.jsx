import AccountSettingsLayout from '../components/layout'
import { useState } from 'react';
import React, { Component } from 'react';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [nextTodos, setNextTodos] = useState('');


  const handleChange = (event) => {
    const main = event.target.value;
    console.log("nextTodoToAdd ",main);
    setNextTodos(main);
    console.log("nextTodos ",nextTodos);
  }

  const handleClick = (event) => {
    const main = '';
    todos.push(nextTodos);
    setTodos(todos);
    setNextTodos(main);
    console.log("todos1 ",todos);
    console.log("nextTodos2 ",nextTodos);
  }

  return(
      <AccountSettingsLayout props ={"/task_manager"} >
        <div>
          <div >
            <h2>Welcome to My TODO List</h2>
          </div>
          <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
          </ul>
          <input
            type="text"
            placeholder="New TODO"
            value = {nextTodos}
            onChange = {handleChange}
          />
          <button onClick={handleClick}>Add TODO</button>
        </div>
      </AccountSettingsLayout>
  )
}
export default Index;
