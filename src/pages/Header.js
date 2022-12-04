import React from 'react';
import './Header.css';
import background from '../img/background.jpg'


function Header() {
    return (
        <div className="Header">
            <div className="headertitle">
                <span className="headertitleSm">React & node</span>
                <span className="headertitleLg">Blog</span>
            </div>

            <img src={background} alt="" className="headerimg" />
            
        </div>
    )
}

export default Header;