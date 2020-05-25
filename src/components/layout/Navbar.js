import React from 'react';
import logo from '../../img/logo84909C.svg';
import { Link } from 'react-router-dom';

// Style
const navbar = {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    padding: '10px 30px 10px 10px'
}
const svg = {
    width: '100px',
    height: '100px'
}
const menu = {
    display: 'flex',
    alignItems: 'center',
}
const link = {
    color: 'white',
    textDecoration: 'none'
}

function Navbar() {
    return (
        <div style={navbar}>
            <span><img src={logo} alt={logo} style={svg} /></span>
            <span style={menu}>
                HOME &nbsp; | &nbsp; 
                MANAGE BUCKETS &nbsp; | &nbsp; 
                HELLO, PRISCILLA &nbsp; | &nbsp; 
                <Link to='/login' style={link}>LOG OUT</Link>
            </span>
        </div>
    );
}

export default Navbar;