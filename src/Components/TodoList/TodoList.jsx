import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = ({ data }) => {

    const elements = data.map(el =>
        <li className='list-group-item' key={el.id}>
            <TodoListItem {...el} />
        </li>
    )

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
}

export default TodoList