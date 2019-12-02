import React from 'react'
import './AddItemForm.css'

class AddItemForm extends React.Component {

    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAded(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className='add-item-form d-flex'
                onSubmit={this.onSubmit}>
                <input type="text"
                    className='form-control'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                    placeholder='Что вы хотите добавить в заметки...' />
                <button
                    className="btn btn-outline-secondary">Add</button>
            </form>
        )
    }
}

export default AddItemForm