import React from 'react';
import Productitem from './Productitem';

function ProductList({data}) {
    const list = data;
    return (
        <div className='tab-list'>
            <h2 className='brandTitle'>{list.brand}</h2>
            <ul className='tab'>
                {
                    list.images.map((imgData, index)=><Productitem key={index} data={imgData} />)
                } 
            </ul>
        </div>
    );
}

export default ProductList;