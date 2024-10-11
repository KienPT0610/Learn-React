import axios from 'axios';
import { getAccessToken } from './axiosClient';

const BASE_URL = 'https://api.spotify.com/v1/artists/';

// Hàm tiện ích để thực hiện các yêu cầu API
const fetchFromSpotify = async (url, params = {}) => {
    const token = await getAccessToken();
    const response = await axios.get(url, {
        params,
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    return response.data;
};

const buildArtistUrl = (endpoint) => `${BASE_URL}${endpoint}`;

const getArtistTracks = async (artistId) => {
    const url = buildArtistUrl(`${artistId}/top-tracks`);
    const params = { market: 'US' };
    return fetchFromSpotify(url, params).then(data => data.tracks);
};

const getArtist = async (artistId) => {
    const url = buildArtistUrl(artistId);
    return fetchFromSpotify(url);
};

const getArtistAlbums = async (artistId) => {
    const url = buildArtistUrl(`${artistId}/albums`);
    return fetchFromSpotify(url);
};

export { getArtistTracks, getArtistAlbums, getArtist };