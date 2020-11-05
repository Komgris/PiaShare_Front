import React,{useEffect,useContext} from 'react';
import Landing from '../layout/layoutMain'
import Login from '../login/mainLogin';
import Register from '../Register/mainRegister'
import MainDashboard from '../Dashboard/MainDashboard' 
import JoinShardRoom from '../Dashboard/JoinShardRoom';
import HeaderDashboard from '../Dashboard/HeaderDashboard';
import MainResume from '../Resume/mainResume';
import { HashRouter as Router, Route } from 'react-router-dom';
import {GlobalContext} from '../Context/GlobalState';
import Constants from '../Constrant/Constrant';
import MainRoom from '../Room/MainRoom';

export default function Mainapp() {
    const { updateCurrentUser,transactions } = useContext(GlobalContext);

     const validateUser= async  ()=>{
        console.log('render');
        let currentId = transactions._id;
        let userId = localStorage.getItem(Constants.USERKEY_LOCAL);
        if (!currentId) {
            
            const userModel = {
                _id: userId
            }
            await updateCurrentUser(userModel);
        }
        else {
        }
    }

    useEffect(() => {
        validateUser(); 
      },[]);

    return (
        <div>
            <Router>
                <Route exact path="/" render={props => (
                    <React.Fragment>
                        <Landing></Landing>
                    </React.Fragment>
                )} />
            </Router>
            <Router>
                <Route exact path="/login" render={props => (
                    <React.Fragment>
                        <Login></Login>
                    </React.Fragment>
                )} />
            </Router>
            <Router>
                <Route exact path="/register" render={props => (
                    <React.Fragment>
                        <Register></Register>
                    </React.Fragment>
                )} />
            </Router>
            <Router>
                <Route exact path="/dashboard" render={props => (
                    <React.Fragment>                          
                        <MainRoom></MainRoom>
                    </React.Fragment>
                )} />
            </Router>
            <Router>
                <Route exact path="/sharedroom" render={props => (
                    <React.Fragment>
                        <HeaderDashboard></HeaderDashboard>
                        <JoinShardRoom></JoinShardRoom>
                    </React.Fragment>
                )} />
            </Router>
            <Router>
                <Route exact path="/porfolio-komgris" render={props => (
                    <React.Fragment>                          
                       <MainResume></MainResume>
                    </React.Fragment>
                )} />
            </Router>

        </div>

    )
}


