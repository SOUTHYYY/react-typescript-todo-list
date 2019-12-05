import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem'
import './TodoList.css'
import { ITodos } from '../../Interfaces/Interfaces'

interface ITodoList  {
    items: ITodos[],
    onDelete: (id: number) => void,
    onToggleImportant: (id: number) => void,
    onToggleDone: (id: number) => void
}

const TodoList: React.FC<ITodoList> = ({ items, onDelete,
    onToggleImportant, onToggleDone}) => {

    const elements = items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}/>
            </li>
        );
    });

    return (<ul className="todo-list list-group">{elements}</ul>);
};

export default TodoList