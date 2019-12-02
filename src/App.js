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
      this.createToDoItem('Drink Coffee'),
      this.createToDoItem('Learn React'),
      this.createToDoItem('Make Awesome App')
    ],
    filter: 'all',
    search: ''
  }

  createToDoItem(label) {
    return {
      id: this.maxLength++,
      label,
      important: false,
      done: false
    }
  }

  onItemAded = (text) => {
    const newItem = this.createToDoItem(text)
    this.setState(({ items }) => {
      const newArr = [
        ...items,
        newItem
      ]
      return {
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
      return { items }
    })
  }

  onToggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id)
    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    return[
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({ items }) => {
      return {
        items: this.onToggleProperty(items, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ items }) => {
      return {
        items: this.onToggleProperty(items, id, 'done')
      }
    })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  onSearchChange = (search) => { 
    this.setState({ search })
    console.log(search)
  }

  searchItems = (items, search) => {
    if(!search.length){
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  filterItems(items, filter) {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => (!item.done));
    } else if (filter === 'done') {
      return items.filter((item) => item.done);
    }
  }

  render() {
    const { items, search, filter } = this.state
    const doneCount = items.filter((items) => items.done === true).length
    const toDoCount = items.length - doneCount
    const vilibleItems = this.searchItems(this.filterItems(items, filter), search);
    return (
      <div className='app-wrapper'>
        <Header doneCount={doneCount} toDoCount={toDoCount} />
        <Navigation 
          filter={filter}
          onFilterChange={this.onFilterChange} 
          onSearchChange={this.onSearchChange}/>
        <TodoList
          items={vilibleItems}
          onDelete={this.onDelete}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItemForm onItemAded={this.onItemAded} />
      </div>
    );
  }
}