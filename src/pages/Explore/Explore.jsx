import React from 'react';
import PropTypes from 'prop-types';
import './explore.css';
import BannerLits from '../../features/Album/components/BannerList/BannerLits';
import SongFeature from '../../features/Song/SongFeature';
import SongList from '../../features/Song/components/SongList/SongList';

Explore.propTypes = {

};

function Explore(props) {
    return (
        <div className='explore'>
            <BannerLits />
            <div className="list-song">
                <h2> Mới Phát Hành </h2>
                <div className="list-btn-language">
                    <button className='active'>tất cả</button>
                    <button>việt nam</button>
                    <button>quốc tế</button>
                </div>
                <SongFeature />
            </div>
        </div>
    );
}

export default Explore;