import React from 'react'
import './AddItemForm.css'

const AddItemForm = ({onItemAded}) => {
    return (
        <div className='add-item-form'>
            <button 
            className="btn btn-outline-secondary"
            onClick={() => onItemAded('do it')}>Add Item</button>
        </div>
    )
}

export default AddItemForm