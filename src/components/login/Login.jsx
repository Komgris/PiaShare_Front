import React,{useState}  from 'react';
import '../../App.css';
import {Register} from '../services/AuthServices'

export default function Login() {

    const [userName,setUserName] = useState('');
    const [passWord,setPassWord] = useState('');
    const [confirmpassWord,setConfirmpassWord] = useState('');

    const onSubmit = e =>{
        e.preventDefault();
        const data ={
            username: userName,
            password: passWord
        }
        let res = Register(data);
        console.log(res)
    }
    return (
        <div class="login-panel">
            <form onSubmit={onSubmit}>
                <h2 className="header-login-container">Register</h2>
                <div className="login-container">
                    <label className="label-login-container">username</label>
                    <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}  className="input-login-container"></input>
                </div>
                {/* ***************************************************************************************************************** */}
                <div className="login-container">
                    <label className="label-login-container">password</label>
                    <input type="password" value={passWord} onChange={(e)=> setPassWord(e.target.value)}  className="input-login-container"></input>
                </div>
                {/* ***************************************************************************************************************** */}
                <div className="login-container">
                    <label className="label-login-container">confirm password</label>
                    <input type="password" value={confirmpassWord} onChange={(e)=> setConfirmpassWord(e.target.value)}  className="input-login-container"></input>
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