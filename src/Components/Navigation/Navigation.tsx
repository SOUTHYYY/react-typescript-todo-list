import React, {useState} from 'react';
import ItemStatusFilter from './ItemStatusFilter/ItemStatusFilter';
import './Navigation.css'

interface INavigation {
    filter: string | undefined,
    onFilterChange: () => void,
    onSearchChange: (search: string) => void
}
const Navigation: React.FC<INavigation> = ({filter, onFilterChange, onSearchChange}) => {

    const [term, setTerm] = useState<string>('')

    const onTermChange = (e:React.FormEvent<HTMLInputElement>) => {
        setTerm(e.currentTarget.value)
    }

        return (
            <div className='search-panel d-flex'>
                <input
                    className='form-control search-input' 
                    placeholder='search'
                    value={term}
                    onChange={onTermChange}></input>
                <ItemStatusFilter filter={filter} onFilterChange={onFilterChange}/>
            </div>
        )
}

export default Navigation
