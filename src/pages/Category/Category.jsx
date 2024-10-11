import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './category.css';
import productsApi from '../../api/productsApi';

Category.propTypes = {
    
};

function Category(props) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await productsApi.getAll();
            console.log(response);
            setCategoryList(response);
        };
        fetchData();
    }, []);

    return (
        <div className='category'>
            {
                categoryList.map(category => (
                    <div key={category.id}>{category.id} {category.title} {category.description}</div>
                ))
            }
        </div>
    );
}

export default Category;