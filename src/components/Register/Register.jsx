import React,  { useContext } from 'react';
import {Get} from '../services/ProfileServices'
import { useForm } from "react-hook-form";
import {Login} from '../services/AuthServices'
import alertify from "alertifyjs";
import { useHistory } from "react-router-dom";
import {GlobalContext} from '../Context/GlobalState'
import '../../App.css';

export default function Register() {

    const { updateCurrentUser } = useContext(GlobalContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async data => {
        let token='';
        await Login(data).then(result => {
            if(result){
                localStorage.setItem('userId',result);
                token = result;
            }
        }).catch((error) => {
            console.log(error)
            alertify.error(error.message);
        })
        await Get(token).then(result=>{
            if(result){
                const currentId={
                    _id: token,
                    name:result.name
                };
                updateCurrentUser(currentId);   
                history.push("/dashboard");
                alertify.success("Success");   
            }
        })
    }

    const handleClickRegister =()=>{
        history.push("/register");
    }

    return (
        <div class="register-panel">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="header-register-container">Login</h2>
            <div className="register-container">
                <label className="label-register-container">username</label>
                <input name="username" type="text" className="input-register-container"  ref={register({ required: true })}></input>
                {errors.username && <span className="red-label">This field is required</span>}
            </div>
            {/* ***************************************************************************************************************** */}
            <div className="register-container">
                <label className="label-register-container">password</label>
                <input name="password" type="password" className="input-register-container"  ref={register({ required: true })}></input>
                {errors.password && <span className="red-label">This field is required</span>}
            </div>
            {/* ***************************************************************************************************************** */}
            <div className="btn-register-footer">
                <button className="btn-footer btn-confirm-register-footer"> confrim</button>
            </div>
            </form>
            {/* ***************************************************************************************************************** */}
            <div className="text-footer">
                <p className="text-register-footer" >Don’t have any account ? </p>
                <p onClick={handleClickRegister} className="link-register-footer"> sign up </p>
            </div>
        </div>
    );
}