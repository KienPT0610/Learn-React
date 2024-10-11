import React from 'react';
import PropTypes from 'prop-types';
import './item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

Item.propTypes = {
    item: PropTypes.object.isRequired,
};

function Item({ item, isActive, onClick }) {

    return (
        <NavLink to={item.url}>
            <div className={`item ${isActive ? 'active' : ''}`} onClick={onClick}>
                <FontAwesomeIcon icon={item.icon} />
                <p> {item.name} </p>
            </div>
        </NavLink>
    );
}

export default Item;