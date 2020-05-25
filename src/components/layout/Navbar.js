import React from 'react';
import logo from '../../img/logo84909C.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <span className='navbar_menu'><img src={logo} alt={logo} className='navbar_svg' /> &nbsp; HELLO, PRISCILLA &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className='navbar_menu'>
                <Link to='/home' className='navbar_link'>HOME</Link> &nbsp; &nbsp; &nbsp; &nbsp; 
                <Link to='/home' className='navbar_link'>MANAGE BUCKETS</Link> &nbsp; &nbsp; &nbsp; &nbsp;
                <Link to='/login' className='navbar_link'>LOG OUT</Link>
            </span>
        </div>
    );
}

export default Navbar;