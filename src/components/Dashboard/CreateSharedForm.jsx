import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function CreateSharedForm() {
    return (
        <div>
            <div className="top-panel-create">สร้างห้องแชร์</div>
        <div className="create-form-panel">
                <form >
                    <div className="container">
                        <div className="row">
                                <div className="col-sm-12 col-md-6"><label className="label-register-container">ชื่อห้อง :</label></div>
                                <div className="col-sm-12 col-md-6"><label className="label-register-container">เงินต้น :</label></div>

                                <div className="col-sm-12 col-md-6">
                                    <input name="username" type="text" className="input-register-container"  ></input>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <input name="username" type="number" className="input-register-container"  ></input>
                                </div>

                                <div className="col-sm-6"><label className="label-register-container">จำนวนสมาชิก :</label></div>
                                <div className="col-sm-6"><label className="label-register-container">รอบการเปีย :</label></div>
                                <div className="col-sm-6">
                                    <input name="username" type="number" className="input-register-container"  ></input>
                                </div>
                                <div className="col-sm-6">
                                    <input name="username" type="text" className="input-register-container"  ></input>
                                </div>
       
                                <div className="col-sm-6"><label className="label-register-container">เริ่ม :</label></div>
                                <div className="col-sm-6"><label className="label-register-container">สิ้นสุด :</label></div>
                                <div className="col-sm-6">
                                    <input name="username" type="text" className="input-register-container"  ></input>
                                </div>
                                <div className="col-sm-6">
                                    <input name="username" type="text" className="input-register-container"  ></input>
                                </div>
                            </div>
                    </div>
                </form>
                <div className="btn-login-footer">
                <button className="btn-footer btn-confirm-login-footer"> confrim</button>
                <button className="btn-footer btn-cancel-login-footer"> cancel</button>
                </div>
        </div>
        </div>
    )
}
