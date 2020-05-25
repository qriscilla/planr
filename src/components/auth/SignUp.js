import React from 'react';
import logo from '../../img/logoB3ACA7.svg';
import Grid from '@material-ui/core/Grid';

const container = {
    minHeight: '100vh',
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: '18px'
}
const svg = {
    width: '200px',
    height: '200px'
}
const input = {
    backgroundColor: 'rgb(250,250,250,0.2)',
    border: 'none',
    outline: 'none',
    width: '310px',
    height: '40px',
    color: 'white',
    fontSize: '18px',
    fontWeight: '500',
    marginTop: '15px',
    paddingLeft: '10px'
}
const btn = {
    marginTop: '15px',
    border: 'none',
    backgroundColor: 'white',
    color: '#CABAAD',
    fontWeight: '900',
    fontSize: '18px',
    width: '320px',
    height: '40px',
    outline: 'none',
    cursor: 'pointer'
}

function SignUp() {
    return (
        <Grid container direction='column' alignItems='center' justify='center' style={container}>
            <Grid item>
                <ul style={{listStyleType:'none'}}>
                    <li><img src={logo} alt={logo} style={svg} /></li>
                    <li>LOG IN or <span style={{fontWeight:'900'}}>SIGN UP</span> to start planning.</li>
                    <li><input type='text' style={input} className='input' placeholder='name' /></li>
                    <li><input type='email' style={input} className='input' placeholder='email' /></li>
                    <li><input type='password' style={input} className='input' placeholder='password' /></li>
                    <li><input type='password' style={input} className='input' placeholder='confirm password' /></li>
                    <li><button style={btn}>SIGN UP</button></li>
                </ul>  
            </Grid>   
        </Grid>    
    )
}

export default SignUp;