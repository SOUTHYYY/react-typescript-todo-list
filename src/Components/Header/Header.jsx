import React from 'react';
import './Header.css'


const Header = ({doneCount, toDoCount}) => {
    return (
        <div className='header d-flex'>
            <h1>My Todo List</h1>
            <h2>{toDoCount} more to do, {doneCount} done</h2>
        </div>
        
    )
}

export default Header