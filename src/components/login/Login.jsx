import React from 'react';
import '../../App.css';

export default function Login() {
    return (
        <div class="login-panel">
      
                    <h2 className="header-login-container">Register</h2>
                    <div className ="login-container">           
                        <label className="label-login-container">username</label>                  
                        <input type="text" className="input-login-container"></input>                 
                    </div>
                    {/* ***************************************************************************************************************** */}
                    <div className ="login-container">                  
                        <label className="label-login-container">password</label>           
                        <input  type="password" className="input-login-container"></input>                 
                    </div>
                    {/* ***************************************************************************************************************** */}
                    <div className ="login-container">                 
                        <label className="label-login-container">confirm password</label>
                       <input  type="password" className="input-login-container"></input>               
                    </div> 
                    {/* ***************************************************************************************************************** */}
                    <div className="btn-login-footer">
                        <button  className="btn-footer btn-confirm-login-footer"> confrim</button>
                        <button  className="btn-footer btn-cancel-login-footer"> cancel</button>
                       
                    </div>   
                    <div  className="text-footer">
                    <p className="text-login-footer" >already have an account ? </p>
                    <p className="link-login-footer"> sign in </p> 
                    </div>
        </div>
    )
}