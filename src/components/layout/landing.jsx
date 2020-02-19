import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slide from './slide'
import '../layout/layout.css'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: '100px',
      backgroundImage: 'url(../../img/background-main.png)'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    mainlabel:{
        justifyContent:'center',
        alignItems:'center'
    },
    menuButton:{
        backgroundColor:'#FDFEFE',
    }
  }));
  
  export default function Landing() {
    const classes = useStyles();
  
    return (
      <div className="background-img-main">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}   container direction="column" justify="flex-end" alignItems="flex-start" >          
            <p><a style ={{fontWeight:'100',fontSize:'72px'}}>PIA</a><a style ={{fontWeight:'bold', fontSize:'72px'}} > SHARE</a></p>
            <p style ={{fontSize:'24px'}}>Create your own <a style ={{fontWeight:'bold'}} >SHARE</a> Management with us</p>
            <Grid item xs  container direction="row"  justify="flex-end" alignItems="flex-start" >
            <Button style ={{fontSize:'24px', paddingLeft:'30px',paddingRight:'30px',fontWeight:'bold',borderRadius:'10px'}} className={classes.menuButton}>let’s start</Button>
            <Slide></Slide>
            </Grid>
           
          </Grid>

        </Grid>
      </div>
      </div>
    );
  }