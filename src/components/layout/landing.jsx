import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from './slide'
import '../../App.css';

  
  export default function Landing() {
    return (
      <div className="background-img-main">
      <div className="header-flex-grow padding-background">
        <Grid container spacing={3}>
          <Grid item xs={6}   container direction="column" justify="flex-end" alignItems="flex-start" >          
            <p><a className="label-topic-lg label-mid-bold">PIA</a><a className="label-bold label-topic-lg" > SHARE</a></p>
            <p className="label-topic">Create your own <a className="label-bold" >SHARE</a> Management with us</p>
            <Grid item xs  container direction="row"  justify="flex-end" alignItems="flex-start" >
            <button className="landing-btn-start">let’s start</button>
            <Slide></Slide>
            </Grid>
           
          </Grid>

        </Grid>
      </div>
      </div>
    );
  }