import React, { Component } from 'react';
import Main from './components/page/mainapp';
import './App.css';
import {GlobalProvider} from './components/Context/GlobalState'

export default class App extends Component {
  render() {
    return (
      <GlobalProvider>
       <Main></Main>
      </GlobalProvider>
    )
  }
}
