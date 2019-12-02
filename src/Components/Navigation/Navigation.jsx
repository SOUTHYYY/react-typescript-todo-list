import React from 'react';
import ItemStatusFilter from './ItemStatusFilter/ItemStatusFilter';
import './Navigation.css'

class Navigation extends React.Component {

    state = {
        search: ''
    }

    onTermChange = (e) => {
        const {onSearchChange = () => {}} = this.props;
        this.setState({
            search: e.target.value
        })
        onSearchChange(e.target.value)
    }

    render(){
        const {filter, onFilterChange } = this.props
        return (
            <div className='search-panel d-flex'>
                <input
                    className='form-control search-input' 
                    placeholder='search'
                    value={this.state.term}
                    onChange={this.onTermChange}></input>
                <ItemStatusFilter filter={filter} onFilterChange={onFilterChange}/>
            </div>
        )
    }
}

export default Navigation
