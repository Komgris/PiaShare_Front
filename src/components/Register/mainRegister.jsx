import React, { Component } from 'react'
import Register from './Register'
import '../../App.css';
import Logo from '../../img/Piashare.png'


export default class mainRegister extends Component {
    render() {
        return (
            <div className="main-register">
                <div className="register-side-body">
                    <img src={Logo} style={{margin:'auto',width:'15em',height:'15em'}}></img>
                </div>
                <div className="register-body">
                    <Register ></Register>
                </div> 
            </div>
        )
    }
}
