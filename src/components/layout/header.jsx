import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../img/Piashare.png';
import '../../App.css'

  export default function Header(props) {

    const handleClickLogin = ()=>{
      props.clickTrigger('login');
    }
    const handleClickRegister =()=>{
      props.clickTrigger('signup')
    }

    return (
      <div class="header-flex-grow">
        <AppBar class="navbar-background" position="static">
          <Toolbar>
            <Typography variant="h6" class="header-flex-grow">
            <img src={logo} class="header-logo" ></img>
            </Typography>
            <button onClick={handleClickLogin} class="header-login-btn header-font-size" >log in</button>
            <a class="header-label header-font-size">or</a>
            <button onClick={handleClickRegister} class="header-menu-btn header-font-size" >sign up</button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }