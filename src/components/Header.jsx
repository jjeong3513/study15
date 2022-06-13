import React from 'react';
import './../style/Header.css';

const Header = ({title}) => {
    return (
        <header id="headerArea">
            <h1>{title}</h1>
        </header>
    );
};

export default Header;