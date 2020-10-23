import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from './slide'
import '../../App.css';


export default function Landing() {
  return (
    <div className="background-img-main">
      <div className="header-flex-grow padding-background">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p><a className="label-topic-lg label-mid-bold">PIA</a><a className="label-bold label-topic-lg" > SHARE</a></p>
            <p className="label-topic">Create your own <a className="label-bold" >SHARE</a> Management with us</p>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <button className="landing-btn-start">let’s start</button>
              </div>
              <div className="col-md-6 col-sm-12">
                <Slide></Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}