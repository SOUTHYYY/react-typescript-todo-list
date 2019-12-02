import React, { useState } from 'react';
import './TodoListItem.css'


const TodoListItem = ({label, important, done, onDelete}) => {

    const [isDone, setIsDone] = useState(done)
    const [isImportant, setIsImportant] = useState(important)

    let onToggleDone = () => {
        setIsDone(!isDone)
    }

    let onToggleImportant = () => {
        setIsImportant(!isImportant)
    }

    let classNames = 'todo-list-item';
    if (isImportant) {
        classNames += ' important';
    }

    if (isDone) {
        classNames += ' done';
    }

    return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}>{label}</span>

            <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
                <i className="fa fa-exclamation"></i>
            </button>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDelete}>
                <i className="fa fa-trash-o"></i>
            </button>
        </span>
    );
};

export default TodoListItem;