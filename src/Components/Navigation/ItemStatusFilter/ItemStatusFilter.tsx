import React from 'react';
import './ItemStatusFilter.css'

interface IItemStatusFilter {
    filter: string | undefined,
    onFilterChange: (filter: string) => void,
}

const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
];

const ItemStatusFilter: React.FC<IItemStatusFilter> = ({ filter, onFilterChange}) => {
    const buttons = filterButtons.map(({ name, label }) => {
        const isActive = name === filter;
        const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

        return (
            <button key={name}
                type="button"
                onClick={() => onFilterChange(name)}
                className={classNames}>{label}</button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default ItemStatusFilter