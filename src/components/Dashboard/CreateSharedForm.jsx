import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Create } from '../services/SharedServices';
import { GlobalContext } from '../Context/GlobalState';

export default function CreateSharedForm(props) {

    const { transactions } = useContext(GlobalContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.member = [
            {
                userId: transactions._id,
                name: transactions.name
            }
        ];
        data.owner = transactions._id
        console.log(data)
        Create(data).then(result => {
            if (data) {
                props.popUpState(false);
            }
        })
    }
    const onCancel = () => {
        props.popUpState(false);
    }

    return (
        <div>
            <div className="top-panel-create">สร้างห้องแชร์</div>
            <div className="create-form-panel">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="col-sm-12"><label className="label-register-container">ชื่อห้อง :</label></div>
                                <div className="col-sm-12">
                                    <input name="name" type="text" className="input-register-container" ref={register({ required: true })}></input>
                                    {errors.name && <span className="red-label">This field is required</span>}
                                </div>
                                <div className="col-sm-12"><label className="label-register-container">จำนวนสมาชิก :</label></div>
                                <div className="col-sm-12">
                                    <input name="maxmember" type="number" className="input-register-container" ref={register({ required: true })}></input>
                                    {errors.maxmember && <span className="red-label">This field is required</span>}
                                </div>
                                <div className="col-sm-12"><label className="label-register-container">เริ่ม :</label></div>
                                <div className="col-sm-12">
                                    <input name="start" type="date" className="input-register-container" ref={register({ required: true })}></input>
                                    {errors.start && <span className="red-label">This field is required</span>}
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="col-sm-12"><label className="label-register-container">เงินต้น :</label></div>
                                <div className="col-sm-12">
                                    <input name="budget" type="number" className="input-register-container" ref={register({ required: true })}></input>
                                    {errors.budget && <span className="red-label">This field is required</span>}
                                </div>
                                <div className="col-sm-12"><label className="label-register-container">รอบการเปีย :</label></div>
                                <div className="col-sm-12">
                                    <input name="peroid" type="text" className="input-register-container" ref={register({ required: true })}></input>
                                    {errors.peroid && <span className="red-label">This field is required</span>}
                                </div>
                                <div className="col-sm-12"><label className="label-register-container">สิ้นสุด :</label></div>
                                <div className="col-sm-12">
                                    <input name="finish" type="date" className="input-register-container" ref={register({ required: true })}></input>
                                    {errors.finish && <span className="red-label">This field is required</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-login-footer">
                        <button type="submit" className="btn-footer btn-confirm-login-footer"> confrim</button>
                        <button type="button" className="btn-footer btn-cancel-login-footer" onClick={() => onCancel()}> cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
