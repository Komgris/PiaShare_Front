import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../img/Piashare.png';
import '../../App.css';
import Dialog from '@material-ui/core/Dialog';
import CreateSharedForm from './CreateSharedForm';
import { useHistory } from "react-router-dom";
import { FaRegBell } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function HeaderDashboard(props) {

    const history = useHistory();
    const [openCreate, setOpenCreate] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const changeState = (value) => {
      setOpenCreate(value);
      props.reRenderMain();
    };

    const toJoinShareRoom =()=>{
      history.push("/sharedroom");
    }

    const backtoMain =()=>{
      history.push("/dashboard");
    }

    return (
      <div className="header-flex-grow">
        <AppBar class="navbar-background" position="static">
          <Toolbar>
            <Typography variant="h6" class="header-flex-grow">
              <img onClick={() => backtoMain()} src={logo} className="header-logo pointer" alt="logo" ></img>
            </Typography>
            <button className="header-login-btn header-font-size" onClick={() => toJoinShareRoom()} >เข้าร่วมวงแชร์</button>
            <p className="header-label header-font-size" >or</p>
            <button className="header-login-btn header-font-size" onClick={() => changeState(true)} >สร้างวงแชร์</button>
            {/* <div style={{ backgroundColor: 'white', border: '2px solid white', borderRadius: '5px', marginLeft: '10px', padding: '5px', cursor: 'pointer' }}>
              
              
            </div> */}
            <Button style={{borderRadius:'5px', border:'2px solid #F09E00', backgroundColor:'white', marginLeft:'5px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <FaRegBell style={{ fontSize: '1.3rem', color: '#F09E00' }}>
              </FaRegBell>
              <span class="badge badge-warning">4</span>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
>
              <MenuItem onClick={handleClose}>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</MenuItem>
              <MenuItem onClick={handleClose}>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Dialog open={openCreate} onClose={() => changeState(true)} fullWidth={true} aria-labelledby="form-dialog-title">
          <CreateSharedForm popUpState={e => changeState(e)} ></CreateSharedForm>
        </Dialog>
      </div>
      );
}
