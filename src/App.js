import React from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import TodoList from './Components/TodoList/TodoList'



function App() {

  const todoData = [
    {label: 'Drink Coffe', important: false, id: 1, done: true},
    {label: 'Build awesome app', important: true, id: 2, done: false},
    {label: 'Die', important: false, id: 3, done: false}
  ]
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <TodoList data={todoData}/>
    </div>
  );
}

export default App;
