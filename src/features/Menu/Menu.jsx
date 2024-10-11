import React from 'react';
import PropTypes from 'prop-types';
import Item from './components/Item/Item';
import './menu.css';

Menu.propTypes = {
    listItem: PropTypes.array.isRequired,
};

function Menu({ listItem, activeItem, onItemClick }) {
    return (
        <ul>
            {
                listItem.map(item => (
                    <Item
                        key={item.id} 
                        item={item}
                        isActive={activeItem === item.id}       // isActive = true if activeItem === item.id
                        onClick={() => onItemClick(item.id)}
                    />
                ))
            }
        </ul>
    );
}

export default Menu;