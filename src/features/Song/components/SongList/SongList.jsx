import React from 'react';
import PropTypes from 'prop-types';
import Song from '../Song/Song';
import './songList.css';

SongList.propTypes = {
    songList: PropTypes.array.isRequired,
};

function SongList({ songList }) {
    return (
        <div className='song-list'>
            {songList.map(song => (
                <li key={song.id}>
                    <Song song={song} />
                </li>
            ))}
        </div>
    );
}

export default SongList;