import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../../App.css';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import logo from '../../img/Piashare.png'

export default function content(){
    return(
        <div>
        <Grid item xs={12}   container direction="column" justify="center" alignItems="center" > 
        <p class="content-paragrah"> What are you looking for ? </p>
        </Grid>
        <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center" >
            
            <button class ="content-btn-choice">PIA<a class="label-bold">SHARE</a> <img src={logo} class="logo-size" ></img> </button> 
            <div class="padding-top-bottom">
            <button class ="content-btn-choice">R.Komgris 's <a class="label-bold">Resume</a> <EmojiPeopleIcon style ={{fontSize:'45px'}}></EmojiPeopleIcon></button>
            </div>
        </Grid>
        </div>
    );
}
