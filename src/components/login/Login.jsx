import React,{useState}  from 'react';
import '../../App.css';
import {Register} from '../services/AuthServices'
import { useForm } from "react-hook-form";
import alertify from "alertifyjs";
import { useHistory } from "react-router-dom";

export default function Login() {

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        if(data.confirm_password === data.password){
            delete data.confirm_password;
            Register(data).then(result=>{
                history.push("/dashboard");
            }).catch((error)=>{
                console.log(error)
                alertify.error(error.message);
            })
        }
        else{
            alertify.error('Please check your password');
        }
    }

    return (//favicon
        <div class="login-panel">
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
                    <button className="btn-footer btn-cancel-login-footer"> cancel</button>

                </div>
                <div className="text-footer">
                    <p className="text-login-footer" >already have an account ? </p>
                    <p className="link-login-footer"> sign in </p>
                </div>
            </form>
        </div>
    )
}