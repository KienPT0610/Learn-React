import React from 'react';
import PropTypes from 'prop-types';
import './sideBar.css';
import Menu from '../../features/Menu/Menu';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


SideBar.propTypes = {
    activeItem: PropTypes.number.isRequired,
    setActiveItem: PropTypes.func.isRequired,
    listItem1: PropTypes.array.isRequired,
    listItem2: PropTypes.array.isRequired,
};

function SideBar( {activeItem, setActiveItem, listItem1, listItem2} ) {
    
    const handleItemClick = (id) => {
        setActiveItem(id);
    }

    return (
        <aside>
            <div className="side-bar">
                <div className="zmp3-logo"></div>
                <Menu listItem={listItem1} activeItem={activeItem} onItemClick={handleItemClick} />
                <hr />
                <div className="menu-container">
                    <Menu listItem={listItem2} activeItem={activeItem} onItemClick={handleItemClick} />
                    <div className='suggest'>
                        Đăng nhập để khám phá playlist dành riêng cho bạn
                        <button> đăng nhập </button>
                    </div>
                </div>
                <div className='create-playlist'>
                    <div className="plus">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    Tạo playlist mới
                </div>
            </div>
        </aside>
    );
}

export default SideBar;