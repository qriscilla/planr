import React from 'react';
import logo from '../../img/logo84909C.svg';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

function Navbar() {
    return (
        <Grid container className='navbar'>
            <Grid item xs={12} md={4} className='navbar_menu'>
                <img src={logo} alt={logo} className='navbar_svg' /> &nbsp; HELLO, PRISCILLA &nbsp; &nbsp; &nbsp; &nbsp;
            </Grid>
            <Grid item container xs={12} md={8} justify='flex-end' className='navbar_menu'>
                <Grid item><Link to='/planr/home' className='navbar_link'>HOME</Link> &nbsp; &nbsp; &nbsp; &nbsp; </Grid>
                <Grid item><Link to='/planr/configure' className='navbar_link'>MANAGE BUCKETS</Link> &nbsp; &nbsp; &nbsp; &nbsp;</Grid>
                <Grid item><Link to='/planr/login' className='navbar_link'>LOG OUT</Link></Grid>
            </Grid>
        </Grid>
    );
}

export default Navbar;