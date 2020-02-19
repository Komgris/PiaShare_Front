import React from 'react';
import './Register.css'

export default function content() {
    return (
        <div class="register-panel">
            <h2 className="header-register-container">Login</h2>
            <div className="register-container">
                <label className="label-register-container">username</label>
                <input type="text" className="input-register-container" style={{ width: '100%' }}></input>
            </div>
            {/* ***************************************************************************************************************** */}
            <div className="register-container">
                <label className="label-register-container">password</label>
                <input type="password" className="input-register-container" style={{ width: '100%' }}></input>
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
        </div>
    );
}