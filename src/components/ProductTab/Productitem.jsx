import React from 'react';

function Productitem({data}) {
    return (
        <li>
           <img src={data} alt="" /> 
        </li>
    );
}

export default Productitem;