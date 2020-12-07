import React, { useContext }from 'react';
import '../../App.css';
import {Register} from '../services/AuthServices'
import { useForm } from "react-hook-form";
import alertify from "alertifyjs";
import Dialog from '@material-ui/core/Dialog';
import CreateNickName from './CreateNickName'
import {GlobalContext} from '../Context/GlobalState';
import { useHistory } from "react-router-dom";

export default function Login(props) {
    const history = useHistory();
    const { updateCurrentUser } = useContext(GlobalContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        if(data.confirm_password === data.password){
            delete data.confirm_password;
            Register(data).then(result=>{
                if(result){
                    localStorage.setItem('userId', result); 
                    const currentId={
                        _id: result
                    }
                    updateCurrentUser(currentId);                
                    changeState(true);
                }
            }).catch((error)=>{
                console.log(error)
                alertify.error(error.message);
            })
        }
        else{
            alertify.error('Please check your password');
        }
    }

    const [openCreate, setOpenCreate] = React.useState(false);

    const changeState = (value) => {
      setOpenCreate(value);
    };

    const handleClickLogin =()=>{
        history.push("/login");
    }

    return (//favicon
        <div className="login-panel">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="header-login-container">Register</h2>
                <div className="login-container">
                    <label className="label-login-container">username</label>
                    <input type="text" name="username"  className="input-login-container" ref={register({ required: true })} ></input>
                    {errors.username && <span className="red-label">This field is required</span>}
                </div>
                {/* ***************************************************************************************************************** */}
                <div className="login-container">
                    <label className="label-login-container">password</label>
                    <input type="password" name="password"  className="input-login-container" ref={register({ required: true })} ></input>
                    {errors.password && <span className="red-label">This field is required</span>}
                </div>
                {/* ***************************************************************************************************************** */}
                <div className="login-container">
                    <label className="label-login-container">confirm password</label>
                    <input type="password" name="confirm_password"  className="input-login-container" ref={register({ required: true })}></input>
                    {errors.confirm_password && <span className="red-label">This field is required</span>}
                </div>
               
                {/* ***************************************************************************************************************** */}
                <div className="btn-login-footer">
                    <button className="btn-footer btn-confirm-login-footer"> confrim</button>
                </div>
                </form>
                <div className="text-footer">
                    <p className="text-login-footer" >already have an account ? </p>
                    <p  onClick={handleClickLogin}  className="link-login-footer"> sign in </p>
                </div>
            

            
            <Dialog open={openCreate} onClose={()=>changeState(true)} maxWidth={'sm'} fullWidth={true}  aria-labelledby="form-dialog-title">
            <CreateNickName ></CreateNickName>
          </Dialog>

        </div>
    )
}