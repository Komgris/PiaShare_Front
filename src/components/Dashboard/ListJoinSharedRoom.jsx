import React from 'react'
import {RequestRoom} from '../services/SharedServices'

export default function ListJoinSharedRoom(props) {
    
    const [buttonState, setbuttonState] = React.useState('JOIN');


    const toJoinShareRoom = (id) =>{
        let model = {
            userId: localStorage.getItem('userId'),
            roomId: id,
            isAccept: false
        }

        RequestRoom(model).then(result=>{
            if(result){
                setbuttonState('Pending...');
            }
        })
    }
    return (
        <div>
                <div key ={props.roomList._id} className="list-join-room">
                    <div className="row justify-content-end">
                        <button className="search-btn-join" onClick={()=>toJoinShareRoom(props.roomList._id)} > {buttonState} </button>
                    </div>
                    <h3>{props.roomList.name}</h3>
                        เจ้าของ :{props.roomList.owner}<br/>
                        สมาชิก : {props.roomList.member}
                    </div>
        </div>
    )
}
