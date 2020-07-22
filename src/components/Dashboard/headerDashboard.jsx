import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../img/Piashare.png';
import '../../App.css';
import CreateSharedForm from './CreateSharedForm';
import Dialog from '@material-ui/core/Dialog';

export default function HeaderDashboard() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div class="header-flex-grow">
          <AppBar class="navbar-background" position="static">
            <Toolbar>
              <Typography variant="h6" class="header-flex-grow">
              <img src={logo} class="header-logo" alt="logo" ></img>
              </Typography>
              <button  class="header-login-btn header-font-size" >รายชื่อเพื่อน</button>
              <p class="header-label header-font-size" >or</p>
              <button  class="header-login-btn header-font-size" onClick={handleClickOpen} >เพิ่มวงแชร์</button>
            </Toolbar>
          </AppBar>

          <Dialog open={open} onClose={handleClose}  fullWidth={true} maxWidth={'xs'} aria-labelledby="form-dialog-title">
            <CreateSharedForm></CreateSharedForm>
          </Dialog>
        </div>
      );
}
