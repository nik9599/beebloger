import React from 'react';
import './Navbar.css';
import img from '../img/image.jpeg'

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="topleft">
            <i className=" topicon fa-brands fa-facebook"></i>
            <i className=" topicon fa-brands fa-twitter"></i>
            <i className=" topicon fa-brands fa-instagram"></i>
            </div>
            <div className="topcenter">
            <ul className='toplist'>
             <li className='toplistitem'>Home</li>
             <li className='toplistitem' >About</li>
             <li className='toplistitem' >Contact</li>
             <li className='toplistitem' >Write</li>
             <li className='toplistitem' >Logout</li>
            </ul>
            </div>
            <div className="topright">
            <img src={img} alt="" className="topimg" />
            <i className=" topsearch fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    );
}

export default Navbar;