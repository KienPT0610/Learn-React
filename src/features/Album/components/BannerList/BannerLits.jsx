import React from 'react';
import PropTypes from 'prop-types';
import './bannerList.css';
import Banner from '../Banner/Banner';

BannerLits.propTypes = {
    
};

function BannerLits(props) {

    const listBanner = [
        {
            id: 1,
            urlImg: 'https://photo-zmp3.zmdcdn.me/banner/1/0/1/c/101c7f0d4c3223e7b201f4fa6a7f578c.jpg',
        },
        {
            id: 2,
            urlImg: 'https://photo-zmp3.zmdcdn.me/banner/b/1/b/a/b1ba613ee0949475b7471b30baf21d12.jpg',
        },
        {
            id: 3,
            urlImg: 'https://photo-zmp3.zmdcdn.me/banner/1/6/7/a/167a5975572bbbeb28b0b4e1984cbd77.jpg',
        },
    ];

    return (
        <div className='list-banner'>
            {
                listBanner.map(banner => (
                    <Banner key={banner.id} banner={banner} />
                ))
            }
        </div>
    );
}

export default BannerLits;