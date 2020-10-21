import React,{ useState }  from 'react'
import {Find, RequestRoom} from '../services/SharedServices'
import ListJoinSharedRoom from '../Dashboard/ListJoinSharedRoom';

export default function JoinShardRoom() {

    const [keyword, setKeyword] = useState("");
    const [sharedList, setsharedList] = useState([]);
    const [countList, setcountList] = useState(0);
    const onSearch = () =>{
        Find(keyword).then(result=>{
            if(result){
                console.log('searchList',result);
                setsharedList(result);
                setcountList(result.length);
            }
        })
    }


    return (
        <div >
            <div className="row justify-content-center" >
                <div className="col-sm-12">
                    <div className="content-join">
                        <label className="top-panel-join"><h1>Join Shared Room</h1></label>
                        <div className="border-join">
                            <label className="top-panel-join"><h2>ค้นหาวงแชร์</h2></label>
                            <form onSubmit={()=>onSearch()}>
                            <div className="main-register">                              
                                    <input className="search-input-join" value={keyword} onChange={e => setKeyword(e.target.value)} type="text"></input>
                                    <button className="search-btn-join"  > Search </button>                              
                            </div>
                            </form>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5>ผลการค้นหา {countList} รายการ</h5>
                                        {
                                            sharedList.map(x =>
                                                <ListJoinSharedRoom roomList ={x} ></ListJoinSharedRoom>
                                                // <div key ={x._id} className="list-join-room">
                                                //     <div className="row justify-content-end"><button className="search-btn-join" onClick={()=>toJoinShareRoom(x._id)} > JOIN </button></div>
                                                //     <h3>{x.name}</h3>
                                                //     เจ้าของ :{x.owner}<br/>
                                                //     สมาชิก : {x.member}
                                                // </div>
                                            )
                                        }
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
