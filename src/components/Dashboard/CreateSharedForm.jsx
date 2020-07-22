import React from 'react';
import { useForm } from "react-hook-form";

export default function CreateSharedForm() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <div className="top-panel-create">สร้างห้องแชร์</div>
            <div className="create-form-panel">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6"><label className="label-register-container">ชื่อห้อง :</label></div>
                            <div className="col-sm-12 col-md-6"><label className="label-register-container">เงินต้น :</label></div>

                            <div className="col-sm-12 col-md-6">
                                <input name="roomName" type="text" className="input-register-container" ref={register({ required: true })}></input>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <input name="budget" type="number" className="input-register-container" ref={register({ required: true })}></input>
                            </div>

                            <div className="col-sm-6"><label className="label-register-container">จำนวนสมาชิก :</label></div>
                            <div className="col-sm-6"><label className="label-register-container">รอบการเปีย :</label></div>
                            <div className="col-sm-6">
                                <input name="memberAmount" type="number" className="input-register-container" ref={register({ required: true })}></input>
                            </div>
                            <div className="col-sm-6">
                                <input name="period" type="text" className="input-register-container" ref={register({ required: true })}></input>
                            </div>

                            <div className="col-sm-6"><label className="label-register-container">เริ่ม :</label></div>
                            <div className="col-sm-6"><label className="label-register-container">สิ้นสุด :</label></div>
                            <div className="col-sm-6">
                                <input name="from" type="date" className="input-register-container" ref={register({ required: true })}></input>
                            </div>
                            <div className="col-sm-6">
                                <input name="to" type="date" className="input-register-container" ref={register({ required: true })}></input>
                            </div>
                        </div>
                    </div>
                    <div className="btn-login-footer">
                        <button className="btn-footer btn-confirm-login-footer"> confrim</button>
                        <button className="btn-footer btn-cancel-login-footer"> cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
