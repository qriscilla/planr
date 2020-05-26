import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Grid from '@material-ui/core/Grid';

function Configure() {
    return (
        <div>

            <Navbar />

            <Grid container justify='center'>
                <Grid item xs={12} sm={4}>
                    <ul style={{color:'white'}}>
                        <p style={{textAlign:'center'}}>TIPS</p>
                        <li>Manage the order of existing buckets by dragging.</li>
                        <li>Buckets only flow in one direction!</li>
                        <li>You can have up to 6 buckets.</li>
                        <li>You must have at least 1 bucket.</li>
                        <li>Upon deleting a bucket that contains tasks, you will be asked to reallocate them to another bucket.</li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className='configure_bucket'>TO DO</div>
                    <div className='configure_bucket'>IN PROGRESS</div>
                    <div className='configure_bucket'>COMPLETED</div>
                    <input type='text' className='configure_input' />
                    <button className='configure_btn'>+</button>
                </Grid>
            </Grid>                

            <Footer />

        </div>
    )
}

export default Configure;