import React,{ useState }  from 'react'
import HeaderDashboard from './HeaderDashboard';
import {Find} from '../services/SharedServices'

export default function JoinShardRoom() {

    const [keyword, setKeyword] = useState("");
    const [sharedList, setsharedList] = useState([]);
    const [countList, setcountList] = useState(0);
    const data = [
        { id: 1, name: 'Test1', owner: 'JOHN', member: 10 },
        { id: 2, name: 'Test1', owner: 'JOHN', member: 20 },
        { id: 3, name: 'Test1', owner: 'JOHN', member: 30 },
        { id: 4, name: 'Test1', owner: 'JOHN', member: 10 },
    ]
    const onSearch = () =>{
        console.log(keyword);
        Find(keyword).then(result=>{
            if(result){
                console.log(result);
                setsharedList(result);
                setcountList(result.length);
            }
        })
    }

    return (
        <div >
            <HeaderDashboard></HeaderDashboard>
            <div className="row justify-content-center" >
                <dic className="col-sm-12">
                    <div className="content-join">
                        <label className="top-panel-join"><h2>Join Shared Room</h2></label>
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
                                    <label>ผลการค้นหา {countList} รายการ</label>
                                    {
                                        sharedList.map(x =>
                                            <div key ={x._id} className="list-join-room">
                                                <div className="row justify-content-end"><button className="search-btn-join" > JOIN </button></div>
                                                <h3>{x.name}</h3>
                                                เจ้าของ :{x.owner}<br/>
                                                สมาชิก : {x.member}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </dic>
            </div>
        </div>
    )
}
