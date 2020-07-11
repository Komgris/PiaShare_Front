import React from 'react';
import { useForm } from "react-hook-form";
import '../../App.css';

export default function Register() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

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
                <button className="btn-footer btn-cancel-register-footer"> cancel</button>
            </div>
            {/* ***************************************************************************************************************** */}
            <div className="text-footer">
                <p className="text-register-footer" >Don’t have any account ? </p>
                <p className="link-register-footer"> sign up </p>
            </div>
            </form>
        </div>
    );
}