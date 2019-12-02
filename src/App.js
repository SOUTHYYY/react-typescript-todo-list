import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import TodoList from './Components/TodoList/TodoList'
import AddItemForm from './Components/AddItemForm/AddItemForm'



export class App extends Component {
  maxLength = 100
  state = {
    items: [
      { id: 1, label: 'Drink Coffee', important: false, done: false },
      { id: 2, label: 'Learn React', important: false, done: false },
      { id: 3, label: 'Make Awesome App', important: false, done: false }
    ],
    filter: 'all',
    search: ''
  }
  onItemAded = (text) => {
    const newItem = {
      id: this.maxLength++,
      label: text,
      important: false,
      done: false
    }
    this.setState(({items}) => {
      const newArr = [
        ...items,
        newItem
      ]
      return{
        items: newArr
      }
    })
  }

  onDelete = (id) => {
    this.setState((state) => {
      const idx = state.items.findIndex((item) => item.id === id)
      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
      ]
      return {items}
    })
  }

  render() {
    const {items, search, filter} = this.state
    const doneCount = items.filter((items) => items.done === true).length
    const toDoCount = items.length - doneCount
    debugger
    return (
      <div className='app-wrapper'>
        <Header doneCount={doneCount} toDoCount={toDoCount}/>
        <Navigation />
        <TodoList items={items}
        onDelete={this.onDelete}/>
        <AddItemForm onItemAded={this.onItemAded}/>
      </div>
    );
  }
}