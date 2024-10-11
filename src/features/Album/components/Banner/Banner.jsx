import React from 'react';
import PropTypes from 'prop-types';
import './banner.css';

Banner.propTypes = {
    banner: PropTypes.object.isRequired,
};

function Banner({ banner }) {
    return (
        <div className='banner'>
            <img src={ banner.urlImg } alt="" />
        </div>
    );
}

export default Banner;