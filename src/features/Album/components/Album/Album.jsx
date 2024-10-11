import React from 'react';
import PropTypes from 'prop-types';
import './album.css';
import WebPlayback from '../WebPlayBack';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album}) {
    return (
        <div className='album'>
            <div className='album__thumbnail' >
                <img src={album.album.images[1].url || album.thumbnailUrl} alt={album.name} />
            </div>
            <p className='album__name' >{album.name}</p>
            <p className='album__artist' >{album.artists[0].name}</p>
        </div>
    );
}

export default Album;