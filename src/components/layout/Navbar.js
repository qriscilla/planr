import React from 'react';

// Style
const navbar = {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: '0.8em',
    textTransform: 'uppercase',
}
const planr = {
    fontSize: '1.2em',
    letterSpacing: '0.05em'
}

function Navbar() {
    return (
        <div style={navbar}>
            <span>year &nbsp; &nbsp; / &nbsp; &nbsp; month &nbsp; &nbsp; / &nbsp; &nbsp; day</span>
            <span style={planr}>planr.</span>
            <span>sign in &nbsp; &nbsp; / &nbsp; &nbsp; about planr.</span>
        </div>
    );
}

export default Navbar;