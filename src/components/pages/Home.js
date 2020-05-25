import React from 'react';
import Navbar from '../layout/Navbar';
import Grid from '@material-ui/core/Grid';
import Footer from '../layout/Footer';

function Home() {
    return (
        <div>
            <Navbar />

            <Grid container className='home' justify='center'>
                <Grid item xs={11} sm={5} lg={3} >
                    <div className='home_bucket'>
                        <div className='home_title'>TO DO</div>                        
                    </div>
                </Grid>
                <Grid item xs={11} sm={5} lg={3}>
                    <div className='home_bucket'>
                        <div className='home_title'>IN PROGRESS</div>                        
                    </div>                </Grid>
                <Grid item xs={11} sm={5} lg={3}>
                    <div className='home_bucket'>
                        <div className='home_title'>COMPLETED</div>                        
                    </div>
                </Grid>
            </Grid>

            <Footer />
        </div>
    )
}

export default Home;