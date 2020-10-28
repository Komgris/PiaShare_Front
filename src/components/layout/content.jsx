import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../../App.css';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import logo from '../../img/Piashare.png';

export default function content(props) {
    const gotoPortfolio = () => {
        props.clickTrigger('resume');
    }
    return (
        <div>
            <p className="content-paragrah"> What are you looking for ? </p>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 col-sm-12 ">
                        <button className="content-btn-choice">PIA<a className="label-bold">SHARE</a> <img src={logo} className="logo-size" ></img> </button>
                    </div>
                    <div className="col-md-6 col-sm-12">
                            <button onClick={() => gotoPortfolio()} className="content-btn-choice">R.Komgris 's <a className="label-bold">Resume</a> <EmojiPeopleIcon style={{ fontSize: '45px' }}></EmojiPeopleIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
