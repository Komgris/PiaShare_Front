import React from 'react'
import { useForm } from "react-hook-form";
import {Create} from '../services/ProfileServices'
import { useHistory } from "react-router-dom";

export default function CreateNickName () {

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.systemId = localStorage.getItem('userId');
        Create(data).then(result=>{
            if(result){
                history.push("/dashboard");
            }
        })
    }

    return (
        <div>
            <div className="top-panel-create">โปรดระบุชื่อเล่นสำหรับใช้ในการเล่นเชร์</div>
            <div className="create-form-panel">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-8">
                                <input name="name" type="text" className="input-register-container" ref={register({ required: true })}></input>
                                {errors.name && <span className="red-label">This field is required</span>}
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <button className="btn-footer btn-confirm-login-footer"> confrim</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
