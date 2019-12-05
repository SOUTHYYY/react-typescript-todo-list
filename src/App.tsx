import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import TodoList from './Components/TodoList/TodoList'
import AddItemForm from './Components/AddItemForm/AddItemForm'

import { ITodos } from './Interfaces/Interfaces';



const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodos[]>([])
  const [filter, setFilter] = useState<string | undefined>('all')
  const [search, setSearch] = useState<string | undefined>('')

  const onItemAded = (label: string) => {
    const newItem: ITodos = {
      id: todos.length + 1,
      label,
      important: false,
      done: false
    }
    setTodos(prev => [newItem, ...todos])
  }

  const onDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  
  const onToggleImportant = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.important = !todo.important
        }
        return todo
      })
    )
  }

  const onToggleDone = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })
    )
  }

  const onFilterChange = (filter?: string) => {
    setFilter(filter)
  }

  const onSearchChange = (search?: string) => {
    setSearch(search)
    console.log(search)
  }

  const searchItems = (items: ITodos[], search: string) => {
    if (!search.length) {
      return todos
    }

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  const filterItems = (items: ITodos[], filter: string) => {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter(item => (!item.done));
    } else if (filter === 'done') {
      return items.filter(item => item.done);
    }
  }
  const doneCount: number = todos.filter((items) => items.done === true).length
  const toDoCount: number = todos.length - doneCount
  // const vilibleItems: ITodos[] = searchItems(filterItems(todos, filter), search);
  return (
    <div className='app-wrapper' >
      <Header doneCount={doneCount} toDoCount={toDoCount} />
      <Navigation
        filter={filter}
        onFilterChange={onFilterChange}
        onSearchChange={onSearchChange} />
      <TodoList
        items={todos}
        onDelete={onDelete}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <AddItemForm onItemAded={onItemAded} />
    </div>
  );
}

export default App