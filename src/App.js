import React, { Component, Fragment } from 'react';
import Navbar from "./components/layout/Navbar"
import Useritem from "./components/users/Useritem"
import './App.css';


class App extends Component {
  render(){
    // call or set variables outside of return
    const name = 'robert'
    return (
    <div className='App'>
        <Navbar/>      
        <Useritem/>
      </div>
      
    );
  }

}

export default App;
