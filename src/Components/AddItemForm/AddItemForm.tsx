import React, { useState } from 'react'
import './AddItemForm.css'

interface IAddItemForm {
    onItemAded: (label: string) => void
}

const AddItemForm: React.FC<IAddItemForm> = ({ onItemAded }) => {
    const [label, setLabel] = useState<string>('')

    const onLabelChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLabel(e.currentTarget.value)
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onItemAded(label)
        setLabel('')
    }

    return (
        <form className='add-item-form d-flex'
            onSubmit={onSubmit}>
            <input type="text"
                className='form-control'
                onChange={onLabelChange}
                value={label}
                placeholder='Что вы хотите добавить в заметки...' />
            <button
                className="btn btn-outline-secondary">Add</button>
        </form>
    )
}

export default AddItemForm