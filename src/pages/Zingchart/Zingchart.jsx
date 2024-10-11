import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { getArtist, getArtistAlbums, getArtistTracks } from '../../api/artistApi';
import AlbumList from '../../features/Album/components/AlbumList/AlbumList';
import './zingchart.css';

Zingchart.propTypes = {

};

function Zingchart(props) {
    const [artistTracks, setArtistTracks] = useState([]);

    useEffect(() => {
        const ids = ['3KJopZ2uUclqEtLxQg0FNn', '0hEurMDQu99nJRq8pTxO14', '6qqNVTkY8uBg9cP3Jd7DAH', '5dfZ5uSmzR7VQK0udbAVpf'];
        const fetchData = async () => {
            try {
                const promises = ids.map(id => getArtistTracks(id));
                const responses = await Promise.all(promises);
                const allTracks = responses.flat();
                console.log('allTracks: ', allTracks);
                
                const artits = await getArtist('3KJopZ2uUclqEtLxQg0FNn');
                const albums = await getArtistAlbums('3KJopZ2uUclqEtLxQg0FNn');

                console.log('artits: ', artits);
                console.log('albums: ', albums);
                setArtistTracks(allTracks);
            } catch (error) {
                console.error('Failed to fetch artist tracks: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='zingchart'>
            <AlbumList albumList={artistTracks} />
        </div>
    );
}

export default Zingchart;