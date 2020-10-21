import React,{useContext} from 'react'
import {RequestRoom} from '../services/SharedServices'
import {GlobalContext} from '../Context/GlobalState';


export default function ListJoinSharedRoom(props) {
    const { transactions } = useContext(GlobalContext);
    const [buttonState, setbuttonState] = React.useState('JOIN');

    const toJoinShareRoom = (id) =>{
        let model = {
            userId: transactions._id,
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
