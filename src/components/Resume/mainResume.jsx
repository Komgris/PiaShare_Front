import React, { useRef } from 'react';
import image from '../../img/Komgris.jpg';
import { FaReact, FaNodeJs, FaAngular, FaGithub } from 'react-icons/fa';
import { MdLocalPhone } from 'react-icons/md';

export default function MainResume() {

    const scrollProp ={
        behavior: "smooth"
    }
    const bioRef = useRef(null);
    const piaRef = useRef(null);
    const dashRef = useRef(null);
    const scrollToBottom = (keyword) => {
        switch (keyword) {
            case 'bio':
                bioRef.current.scrollIntoView(scrollProp);
                break;
            case 'pia':
                piaRef.current.scrollIntoView(scrollProp);
                break;
            case 'dash':
            dashRef.current.scrollIntoView(scrollProp);
                break;
            default:
                break;
        }
    }

    return (
        <div className="back-ground-resume" >
            <div className="container">
            <div className="row justify-content-center resume-content">
                <div >
                    <div className="col-12">
                        <div><img className="img-template" src={image}></img></div>
                        <center>
                            <h1 className="resume-name">Komgris Ratanacoop</h1>
                            <p className="paragraph-resume">I’m Junior Web Developer that interest in React <FaReact /> and Node.js <FaNodeJs /><br />
                I have experience in Angular, .net framework for 1 year </p>
                            <p className="paragraph-resume topic">My Bio below</p>
                            <div className="row col-sm-10"><button onClick={() => scrollToBottom('bio')} className="content-btn-choice">Komgris Ratanacoop Bio</button></div>
                            <p className="paragraph-resume topic"> or you can see my project below </p>
                            <div className="row col-sm-10"><button onClick={() => scrollToBottom('pia')} className="content-btn-choice-width">PiaShare using React and Express js<FaReact /><FaNodeJs /></button></div>
                            <div className="row col-sm-10"><button onClick={() => scrollToBottom('dash')} className="content-btn-choice-width">Dashboard Demo using Angular<FaAngular /></button></div>
                        </center>
                    </div>
                    <div className="col-12">
                        <div className="bio-card-panel ">
                        <h1 ref={bioRef} className="main-panel-resume font-p-weight">Bio</h1>
                            <p className="paragraph-resume">My name is Komgris Ratanacoop <br />
                    I'm 25 Years old</p>
                            <div className="topic-panel">Education</div>
                            <p className="paragraph-resume">2013 - 2018 King Mongkut's University of Technology North Bangkok</p>
                            <p className="paragraph-resume topic">Bachelor Degree : </p>
                            <p className="paragraph-resume">Electronic Engineering Technology Instrument and Automation</p>
                            <p className="paragraph-resume topic">GDP : 2.61</p>
                            <p className="paragraph-resume">ONE F from PHYSICS II,<br />
                    Double F from CHEMISTRY FOR ENGINEERING,<br />
                    Double F from ENGINEERING MATERIALS
                    </p>
                            <div className="topic-panel">Experience</div>
                            <p className="paragraph-resume topic">Dec 2019 - Present</p>
                            <p className="paragraph-resume">PS Engineering Consultants Co.,Ltd. : Project Engineering<br />
                        Develop Application from Customer Requirement<br />
                        desktop app, web app etc. <br /></p>
                            <div className="topic-panel">Contact</div>
                            <p className="paragraph-resume"><MdLocalPhone />Tel : 088-970-6605 <br />
                    Email : komgris.ratanacoop@hotmail.com <br />
                                <FaGithub />Github :<a href="https://github.com/Komgris" target="_blank" rel="noopener noreferrer"> github.com/Komgris</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bio-card-panel ">
                        <h1 className="main-panel-resume font-p-weight">Project</h1>
                            <h1 ref={piaRef} className="paragraph-resume topic">Piashare</h1>
                            <p className="paragraph-resume">
                                is project that i do when i have free time. <br />
                                this project is help user to management piashare( เปียแชร์ ) easier
                        </p>
                            <p className="paragraph-resume topic">Tech Stack</p>
                            <p className="paragraph-resume">
                                React <FaReact /> (Hooks, Context API)<br />
                            Nodejs <FaNodeJs />(Express.js, Mongoose)<br />
                            Mongo db<br />
                            </p>
                            <p className="paragraph-resume topic"><FaGithub />Github</p>
                            <p className="paragraph-resume">
                                Frontend : <a href="https://github.com/Komgris/PiaShare_Front" target="_blank" rel="noopener noreferrer">github.com/Komgris/PiaShare_Front</a> <br />
                                Backend : <a href="https://github.com/Komgris/PiaShare_API" target="_blank" rel="noopener noreferrer">github.com/Komgris/PiaShare_API</a> <br />
                                Deploy with AWS ec2 (not implement backend yet) : <a href="http://18.220.5.2/" target="_blank" rel="noopener noreferrer">AWS EC2</a> <br />
                            </p>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="bio-card-panel ">
                            <h1 ref={dashRef}  className="paragraph-resume topic">Dashboard Demo
                            </h1>
                            <p className="paragraph-resume">
                                Dashboard Demo that i create with mock data and free api<br />
                                this dashboard show graph chart and some component that i used to do.
                            </p>
                            <p className="paragraph-resume topic">Tech Stack</p>
                            <p className="paragraph-resume">
                                Angular <FaAngular />
                            </p>
                            <p className="paragraph-resume topic"><FaGithub />Github</p>
                            <p className="paragraph-resume">
                                Frontend : <a href="https://github.com/Komgris/Dashboard_Portfolio" target="_blank" rel="noopener noreferrer">github.com/Komgris/Dashboard_Portfolio</a> <br />
                                Deploy with AWS Amplify : <a href="https://master.d390sdzyiuezyw.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Dashboard Portfolio</a> <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
