import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <Link to='/planr/about' className='footer_link'>About planr.</Link>
        </div>
    );
}

export default Footer;