import React, { useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HeaderDashboard from './HeaderDashboard';
import {Get} from '../services/SharedServices';

const useStyles = makeStyles(theme => ({
    cardHeader: {
        backgroundColor:'#F09E00', 
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:'1.5rem'
    },
  }));

export default function MainDashboard() {
    const [shareRoom, setshareRoom] = useState([]);
    const classes = useStyles();
    useMemo(() => {
        Get(localStorage.getItem('userId')).then(result=>{
            setshareRoom(result);
        })
        
      },[]);
    
    return (
        <div>
            <HeaderDashboard></HeaderDashboard>
            <div className= "margin-main-dashboard">
                <div class="container">
                    <div class="row justify-content-start">
                    {
                        shareRoom.map(x=>
                            <div class="col-md-2.5">
                        <div className="margin-right">
                            <div class="card border-share">
                                <div class="card-header" className={classes.cardHeader}>
                                        {x.name}
                                </div>
                                <div class="card-body card-body-font-size">
                                    <ul>
                                    <li  className="label-bold">เจ้ามือ : {x.name}</li>
                                    <li className="label-bold">รอบเปียถัดไป : 3 มีนาคม 2563</li>
                                    <li className="label-bold">ดอกเบี้ย+เงินต้น : {x.budget}</li>
                                    <li className="label-bold">ยอดส่ง : 150 บาท</li>
                                    </ul>
                                </div>
                                <button className="btn-footer btn-cancel-login-footer"> เพิ่มเติม </button>
                            </div>
                            </div>
                        </div>
                            )
                    }
                    </div>
                </div>
            </div>                      
        </div>
    )
}
