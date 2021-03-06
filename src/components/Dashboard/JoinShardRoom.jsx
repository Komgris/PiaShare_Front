import React,{ useState,useContext }  from 'react'
import {Find} from '../services/SharedServices'
import ListJoinSharedRoom from '../Dashboard/ListJoinSharedRoom';
import {GlobalContext} from '../Context/GlobalState';


export default function JoinShardRoom() {
    const { transactions } = useContext(GlobalContext); 
    const [keyword, setKeyword] = useState("");
    const [sharedList, setsharedList] = useState([]);
    const [countList, setcountList] = useState(0);
    const onSearch = async () =>{
            await Find(keyword,transactions._id).then(result=>{
            if(result){           
                setsharedList(result);
                console.log('searchList',result);
                setcountList(result.length);
            }
        })
    }


    return (
        <div >
            <div className="row justify-content-center" >
                <div className="container">
                    <div className="col-sm-12">
                        <label className="top-panel-join"><h1>Join Shared Room</h1></label>
                        <div className="border-join">
                            <label className="top-panel-join"><h2>ค้นหาวงแชร์</h2></label>
                            <form onSubmit={()=>onSearch()}>
                                <div className="row">
                                    <div className="col-sm-9">
                                        <input className="search-input-join" value={keyword} onChange={e => setKeyword(e.target.value)} type="text"></input>
                                    </div>
                                    <div className="col-sm-2">
                                        <button className="search-btn-join"  > Search </button>
                                    </div>
                                </div>
                            </form>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5>ผลการค้นหา {countList} รายการ</h5>
                                        {

                                            sharedList.map(x => 
                                                <ListJoinSharedRoom key ={x._id} roomList ={x} ></ListJoinSharedRoom>
                                                // <div  className="list-join-room">
                                                //     <div className="row justify-content-end"><button className="search-btn-join"  > JOIN </button></div>
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
