import React from 'react';
import PropTypes from 'prop-types';
import './optionCircle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

OptionCircle.propTypes = {
    icon: PropTypes.object.isRequired,
};

function OptionCircle({icon}) {
    return (
        <div className='option-circle'>
            <FontAwesomeIcon icon={icon} />
        </div>
    );
}

export default OptionCircle;