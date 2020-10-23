import React, { Component } from 'react'
import Register from './Register'
import '../../App.css';
import Logo from '../../img/Piashare.png'


export default class mainRegister extends Component {
    render() {
        return (
                // <div className="row">
                //     <div className="col" >
                        <div className="register-body">
                            <Register ></Register>
                        </div>
                //     </div>
                // </div>
        )
    }
}
