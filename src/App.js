
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;
 
  
  state = {
    progress:0
  }
  //We need to set setProgress as a arrowfunction to use this.setState normal function throws a

  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height = {3}
        color='#f11946'
        progress={this.state.progress}
        
        
        />
        
        <Routes>
        <News   pageSize={this.pageSize} country="in" category="general"/>
        </Routes>
        </Router>
      </div>
    )
  }
}
