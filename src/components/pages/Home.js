import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

function Home() {

    return (
        <div>

            <Navbar />

            <div className='home'>

                <section className="home_buckets">

                    <div className="home_bucket">
                        <div className='home_title'>TO DO</div>
                        <ul className='home_ul'>
                            <li><span className='home_span'>Finish planr. UI</span></li>
                            <li><span className='home_span'>Find an apt in Chicago</span></li>
                        </ul>
                    </div>
                    <div class="home_bucket">
                        <div className='home_title'>IN PROGRESS</div>
                        <ul className='home_ul'>
                            <li><span className='home_span'>Read Pachinko</span></li>
                        </ul>
                    </div>
                    <div class="home_bucket">
                        <div className='home_title'>COMPLETED</div>
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