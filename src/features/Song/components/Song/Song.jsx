import React from 'react';
import PropTypes from 'prop-types';
import './song.css';

Song.propTypes = {
    song: PropTypes.object.isRequired,
};

function Song({ song }) {
    return (
        <div className='song'> 
            <div className="song__thumbnail">
                <img src={song.album.images[1].url} alt={song.name} />
            </div>
            <div className="song__info">
                <p className="song__name">{song.name}</p>
                <p className="song__artist">{song.album.artists[0].name}</p>
            </div>
        </div>
    );
}

export default Song;