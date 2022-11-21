import React from 'react';
import './Navbar.js';


function Navbar() {
    return (
        <div className='Navbar'>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>ALL Stories</a></li>
                    <li><a>World News</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;