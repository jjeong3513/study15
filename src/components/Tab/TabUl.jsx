import React from 'react';
import TabLi from './TabLi';

const TabUl = ({data}) => {
    const liData = data;
    return (
        <div>
            <h2>{liData.brand}</h2>
            <ul>
               {
                   liData.images.map((imgUrl,index)=><TabLi key={index} img={imgUrl}/>)
               }
            </ul>
        </div>
    );
};

export default TabUl;