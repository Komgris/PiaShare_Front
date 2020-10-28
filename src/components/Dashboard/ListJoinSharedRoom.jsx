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
    }//className="search-btn-join"
    return (
                <div key ={props.roomList._id} className="list-join-room">
                    <div className="row justify-content-end">
                        <button className={[
                        props.roomList.remark === 'Joined' ? 'search-btn-joined' : '',
                        props.roomList.remark === 'Pending Request' ? 'search-btn-pending' : '',
                        props.roomList.remark === 'Join' ? 'search-btn-join' : ''].join(' ')}  onClick={()=>toJoinShareRoom(props.roomList._id)} > {props.roomList.remark} </button>
                    </div>
                    <h3>{props.roomList.name}</h3>
                        เจ้าของ :{props.roomList.owner}<br/>
                    </div>
    )
}
