import React, { Component } from 'react';
import Header from './header';
import Landing from './landing';
import Content from './content';
import { withRouter } from 'react-router-dom';

class layoutMain extends Component {
    constructor(props) {
        super(props);
    }
    changePage(data){
        if(data === 'login'){
            this.props.history.push('/login'); 
        }
        else{
            this.props.history.push('/register'); 
        }        
    }
    render() {
        return (
            <div>
                    <Header clickTrigger={this.changePage.bind(this)}></Header>
                    <Landing></Landing>
                    <Content></Content>
            </div>
        )
    }
}
export default withRouter(layoutMain)
