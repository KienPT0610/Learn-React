import React from 'react';
import PropTypes from 'prop-types';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

Search.propTypes = {
    
};

function Search(props) {
    return (
        <div className='search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'/>
        </div>
    );
}

export default Search;