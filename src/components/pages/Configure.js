import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Grid from '@material-ui/core/Grid';

function Configure() {
    return (
        <div>
            <Navbar />

                <div style={{minHeight:'calc(100vh - 25vh)'}}>
                    <Grid container justify='center' style={{color:'white',fontWeight:'700'}}>
                        <Grid item xs={11} sm={4} style={{backgroundColor:'rgb(250,250,250,0.2)',paddingLeft:'20px'}}>
                            <div style={{textAlign:'center',backgroundColor:'rgb(250,250,250,0.2)',marginLeft:'-20px',paddingTop:'5px',paddingBottom:'5px'}}>TIPS</div>
                            <p>Buckets only flow in one direction!</p>
                            <p>You must have at least one bucket.</p>
                            <p>Manage the order of existing buckets by dragging.</p>
                            <p>Upon deleting a bucket that contains tasks,<br/> you will be asked to reallocate them to another bucket.</p>
                        </Grid>
                        <Grid item xs={12} sm={1}>

                        </Grid>
                        <Grid item xs={11} sm={4} style={{marginTop:'20px'}}>                        
                            <div className='configure_bucket'>TO DO</div>
                            <div className='configure_bucket'>IN PROGRESS</div>
                            <div className='configure_bucket'>COMPLETED</div>
                            <input type='text' className='configure_input' placeholder='NEW BUCKET NAME . . .' />
                            <button className='configure_btn'>+</button>
                        </Grid>
                    </Grid>                    
                </div>

            <Footer />
        </div>
    )
}

export default Configure;