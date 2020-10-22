import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../img/Piashare.png';
import '../../App.css';
import Dialog from '@material-ui/core/Dialog';
import CreateSharedForm from './CreateSharedForm';
import { useHistory } from "react-router-dom";


export default function HeaderDashboard(props) {

    const history = useHistory();
    const [openCreate, setOpenCreate] = React.useState(false);

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
              <img onClick={()=>backtoMain()}  src={logo} className="header-logo pointer" alt="logo" ></img>
              </Typography>
              <button  className="header-login-btn header-font-size" onClick={()=>toJoinShareRoom()} >เข้าร่วมวงแชร์</button>
              <p className="header-label header-font-size" >or</p>
              <button  className="header-login-btn header-font-size" onClick={()=>changeState(true)} >สร้างวงแชร์</button>
            </Toolbar>
          </AppBar>

          <Dialog open={openCreate} onClose={()=>changeState(true)}  fullWidth={true}  aria-labelledby="form-dialog-title">
            <CreateSharedForm popUpState={e=>changeState(e)} ></CreateSharedForm>
          </Dialog>
        </div>
      );
}