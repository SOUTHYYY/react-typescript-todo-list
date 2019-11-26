import React from 'react';
import ItemStatusFilter from './ItemStatusFilter/ItemStatusFilter';
import './Navigation.css'

const Navigation = (props) => {
    return (
        <div className='search-panel d-flex'>
            <input className='form-control search-input' placeholder='search'></input>
            <ItemStatusFilter />
        </div>
    )
}

export default Navigation
