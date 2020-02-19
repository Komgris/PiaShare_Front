import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../layout/layout.css';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import logo from '../../img/Piashare.png'

export default function content(){
    return(
        <div>
        <Grid item xs={12}   container direction="column" justify="center" alignItems="center" > 
        <p class="content-paragrah" style ={{fontWeight:'100'}}> What are you looking for ? </p>
        </Grid>
        <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center" >
            
            <button class ="content-btn-choice">PIA<a style ={{fontWeight:'bold',margin:'auto',width:'auto'}}>SHARE</a> <img src={logo} style={{width:'1.5em',height:'1.5em'}} ></img> </button> 
            <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
            <button class ="content-btn-choice">R.Komgris 's <a style ={{fontWeight:'bold'}}>Resume</a> <EmojiPeopleIcon style ={{fontSize:'45px'}}></EmojiPeopleIcon></button>
            </div>
        </Grid>
        </div>
    );
}
