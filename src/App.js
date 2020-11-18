import React, { Fragment, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from './components/pages/About';
import User from "./components/users/User";
import GithubState from './context/github/GithubState';
import './App.css';


const App =()=> {
  const [alert, setAlert] = useState(null)

  //searches github users
  // const searchUsers = async (text)=>{
  //   setLoading(true)
  //   const res= await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` 
  //     );
  //     setUsers(res.data.items) 
  //     setLoading(false)
  //   }
  // gets single user
  //   const getUser = async (username) =>{
  //    setLoading(true)
  //    const res= await axios.get(
  //     `https://api.github.com/users/${username}?client_id=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` 
  //     );
  //     setUser(res.data) 
  //     setLoading(false)
  //  }
     // gets single user repos
    // const getUserRepos = async (username) =>{
    //   setLoading(true)
    //   const res= await axios.get(
    //    `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
    //    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    //    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` 
    //    );
    //    setRepos(res.data)
    //    setLoading(false);
    // }

  //clear users from state
  // const clearUsers =()=>{
  //   setUsers([])
  //   setLoading(false);
  // };
  //sets the alert
  const showAlert=(msg,type)=>{
    setAlert({msg, type})
    setTimeout(()=>setAlert(null), 5000)
  }
    return (
      <GithubState>
        <Router>
          <div className='App'>
            <Navbar/>
            <div className="container">
              <Alert alert={alert}/>
              <Switch>
                <Route exact path='/' render={props=>(
                  <Fragment>
                    <Search setAlert={showAlert}/>
                    <Users />
                  </Fragment>

                )}/>
                <Route exact path="/about" component={About}/>
                <Route exact path='/user/:login' component={User}/>
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
      
    );
  }

export default App;
