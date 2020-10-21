import React, { useState, useEffect, useContext }from 'react'
import {GlobalContext} from '../Context/GlobalState';


export default function ProfilePanel() {

    const { transactions } = useContext(GlobalContext);
    const [profile, setprofile] = useState([]);
    useEffect(() => {
        setprofile(transactions);
    },[]);


    return (
        <div className="profile-panel-background">
            <label>ผู้ใช้งาน : {profile.name}</label><br/>
            <label>เจ้าของห้อง : 5</label>
        </div>
    )
}
