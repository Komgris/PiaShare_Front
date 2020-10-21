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
      <div className="header-flex-grow">
        <AppBar class="navbar-background" position="static">
          <Toolbar>
            <Typography variant="h6" class="header-flex-grow">
            <img src={logo} className="header-logo" ></img>
            </Typography>
            <button onClick={handleClickLogin} className="header-login-btn header-font-size" >log in</button>
            <a className="header-label header-font-size">or</a>
            <button onClick={handleClickRegister} className="header-menu-btn header-font-size" >sign up</button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }