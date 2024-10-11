import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import Search from '../../features/Search/Search';
import OptionCircle from '../../features/OptionCircle/OptionCircle';
import { faGear, faUser, faArrowRightLong, faArrowLeftLong, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthProvider';

Header.propTypes = {
    activeItem: PropTypes.string,
    setActiveItem: PropTypes.func,
    menuItems: PropTypes.array,
};

function Header({ activeItem, setActiveItem, menuItems }) {

    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {
        navigate(menuItems[activeItem - 1].url);
    }, [activeItem, menuItems, navigate]);

    const handlePrevClick = () => {
        setActiveItem((prev) => (prev > 1 ? prev - 1 : 1));
    }

    const handleNextClick = () => {
        setActiveItem((prev) => (prev < 4 ? prev + 1 : 4));

    }

    const handleUser = () => {
    }

    return (
        <div className='header'>
            <div className='pre-next'>
                <FontAwesomeIcon
                    onClick={handlePrevClick}
                    className={`icon ${activeItem === 1 ? 'active' : ''}`}
                    icon={faArrowLeftLong}
                />
                <FontAwesomeIcon
                    onClick={handleNextClick}
                    className={`icon ${activeItem === 4 ? 'active' : ''}`}
                    icon={faArrowRightLong}
                />
            </div>
            <Search />
            <button className='update-account'> Nâng cấp tài khoản </button>
            <button className='download' > <FontAwesomeIcon icon={faDownload} /> Tải bản Windows </button>
            <OptionCircle icon={faGear} />
            <div onClick={handleUser}>
                <OptionCircle icon={faUser} />
            </div>
            <button onClick={logout}>logout</button>
        </div>
    );
}

export default Header;