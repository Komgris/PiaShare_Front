import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../img/Piashare.png';
import '../../App.css'

export default function HeaderDashboard() {
    return (
        <div class="header-flex-grow">
          <AppBar class="navbar-background" position="static">
            <Toolbar>
              <Typography variant="h6" class="header-flex-grow">
              <img src={logo} class="header-logo" ></img>
              </Typography>
              <button  class="header-login-btn header-font-size" >รายชื่อเพื่อน</button>
              <a class="header-label header-font-size">or</a>
              <button  class="header-login-btn header-font-size" >เพิ่มวงแชร์</button>
            </Toolbar>
          </AppBar>
        </div>
      );
}
