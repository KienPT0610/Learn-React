import { faBars, faMusic, faStar, faCompactDisc, faRankingStar, faMagnifyingGlass, faIcons } from '@fortawesome/free-solid-svg-icons';

export const uselistItem1 = [
    {
        id: 1,
        name: 'Thư Viện',
        url: '/category',
        logo: 'https://w7.pngwing.com/pngs/777/475/png-transparent-library-music-ios-glyphs-icon-thumbnail.png',
        icon: faBars
    },
    {
        id: 2,
        name: 'Khám Phá',
        url: '/',
        icon: faMagnifyingGlass
    },
    {
        id: 3,
        name: '#zingchart',
        url: '/zing-chart',
        icon: faMusic
    },
    {
        id: 4,
        name: 'Radio',
        url: '/radio',
        icon: faCompactDisc
    }
]

export const uselistItem2 = [
    {
        id: 5,
        name: 'BXH Nhạc Mới',
        url: '/vip',
        icon: faRankingStar
    },
    {
        id: 6,
        name: 'Chủ Đề & Thể Loại',
        url: '/tv',
        icon: faIcons
    },
    {
        id: 7,
        name: 'Top 100',
        url: '/chat',
        icon: faStar
    }
]