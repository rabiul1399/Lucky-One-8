import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='nav'>
            <h2>E-Techno</h2>
            <div className='navbar'>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Overview</a>
                <a href="#">About Us</a>
            </div>
            

        </div>
    );
};

export default Header;