import React from 'react';
import Navbar from '../layout/Navbar';
// import Grid from '@material-ui/core/Grid';
import Footer from '../layout/Footer';

function Home() {
    return (
        <div>

            <Navbar />

            <div className='home'>

                <section class="home_buckets">

                    <div class="home_bucket">
                        <div className='home_title'>TO DO</div>
                    </div>
                    <div class="home_bucket">
                        <div className='home_title'>TO DO</div>
                    </div>
                    <div class="home_bucket">
                        <div className='home_title'>TO DO</div>
                    </div>
                    <div class="home_bucket">
                        <div className='home_title'>TO DO</div>
                    </div>
                    <div class="home_bucket">
                        <div className='home_title'>TO DO</div>
                    </div>
                    <div class="home_bucket">
                        <div className='home_title'>TO DO</div>
                    </div>

                </section>

            </div>

            <Footer />

        </div>
    )
}

export default Home;