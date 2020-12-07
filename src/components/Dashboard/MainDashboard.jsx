import React, { useState, useEffect,useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Get } from '../services/SharedServices';
import ProfilePanel from './ProfilePanel';
import HeaderDashboard from './HeaderDashboard';
import {GlobalContext} from '../Context/GlobalState';
import alertify from "alertifyjs";
import Constants from '../Constrant/Constrant';

const useStyles = makeStyles(theme => ({
    cardHeader: {
        backgroundColor: '#F09E00',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
}));

export default function MainDashboard() {
    const { transactions } = useContext(GlobalContext);
    const [shareRoom, setshareRoom] = useState([]);
    const classes = useStyles();

    const getShareRoom=()=>{
        let userId= transactions._id ? transactions._id : localStorage.getItem(Constants.USERKEY_LOCAL)
            Get(userId).then(result=>{
                setshareRoom(result);
            }).catch((error)=>{
                console.log(error)
                alertify.error(error.message);
            });
        
    }
    useEffect(() => {
        getShareRoom(); 
      },[]);


    
    return (
        <div>
             <HeaderDashboard reRenderMain={()=>getShareRoom()}></HeaderDashboard>
            <div className="row flex-row-reverse">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <ProfilePanel></ProfilePanel>
                </div>
            </div>
            <div className="margin-main-dashboard">
                    <div className="row flex-row">
                        {
                            shareRoom.map(x =>
                                <div className="col-lg-3 col-md-4 col-sm-12 col-12"  >
                                    <div className="margin-right">
                                        <div className="card border-share">
                                            <div class="card-header" className={classes.cardHeader}>
                                                {x.name}
                                            </div>
                                            <div className="card-body card-body-font-size">
                                                <ul>
                                                    <li className="label-bold">เจ้ามือ : {x.name}</li>
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
    )
}
