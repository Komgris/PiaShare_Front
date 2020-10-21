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
            this.props.history.push('/register'); 
        }
        else if(data === 'resume'){
            this.props.history.push('/porfolio-komgris'); 
        }
        else{
            this.props.history.push('/login'); 
        }        
    }
    render() {
        return (
            <div>
                    <Header clickTrigger={this.changePage.bind(this)}></Header>
                    <Landing></Landing>
                    <Content clickTrigger={this.changePage.bind(this)}></Content>
            </div>
        )
    }
}
export default withRouter(layoutMain)
