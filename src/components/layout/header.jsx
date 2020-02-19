import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../img/Piashare.png';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    navbar:{
        backgroundColor:'#F09E00'
    },
    LoginButton: {
      color: '#F09E00',
      backgroundColor: '#FDFEFE',
      fontWeight: 'bold',
      paddingLeft: '20px',
      paddingRight: '20px'
    },
    menuButton: {
        color: '#FDFEFE',
        backgroundColor: '#F09E00',
        border: '1px solid #FDFEFE',
        fontWeight: 'bold',
        paddingLeft: '20px',
        paddingRight: '20px'
      },
    title: {
      flexGrow: 1,
    },
  }));

  export default function Header(props) {

    const handleClickLogin = ()=>{
      props.clickTrigger('login');
    }
    const handleClickRegister =()=>{
      props.clickTrigger('signup')
    }

    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            <img src={logo} style={{width:'3em',height:'3em'}} ></img>
            </Typography>
            <Button onClick={handleClickLogin} className={classes.LoginButton} >log in</Button>
            <a style={{color:'#000000',padding:'10px 10px 10px 10px',fontWeight:'bold'}}>or</a>
            <Button onClick={handleClickRegister} className={classes.menuButton} >sign up</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }