import React, { useEffect, useState } from 'react';
import SongList from './components/SongList/SongList';
import './songFeature.css';
import { getArtistTracks } from '../../api/artistApi';

function SongFeature(props) {
    const [songList, setSongList] = useState([]);

    useEffect(() => {
        const ids = ['3KJopZ2uUclqEtLxQg0FNn', '0hEurMDQu99nJRq8pTxO14', '6qqNVTkY8uBg9cP3Jd7DAH'];
        const fetchData = async () => {
            const promises = ids.map(id => getArtistTracks(id));
            const responses = await Promise.all(promises);
            const allTracks = responses.flat();
            setSongList(allTracks);
        };
        fetchData();
    }, []);

    return (
        <div className='song-feature'>
            <SongList songList={songList} />
        </div>
    );
}

export default SongFeature;