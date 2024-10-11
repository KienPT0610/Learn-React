import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {

    const albumList = [
        {
            id: 1,
            name: 'Nam Thần Nhạc Việt',
            thumbnailUrl: 'https://i1.sndcdn.com/artworks-i0nLuYBs0dR2nsn4-AkxVlg-t500x500.jpg'
        },
        {
            id: 2,
            name: 'Hot Hits Vietnam',
            thumbnailUrl: 'https://i1.sndcdn.com/artworks-i0nLuYBs0dR2nsn4-AkxVlg-t500x500.jpg'
        },
        {
            id: 3,
            name: 'Ballad Việt Ngày Nay',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg…over/5/3/a/f/53afaadc1441137fa7120bc00941808e.jpg'
        },
    ]

    return (
        <div>
            <h2> Có Thể Bạn Muốn Nghe </h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;