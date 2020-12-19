import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration/index';
import Login from './pages/Login';
import './default.scss';

import {  } from './firebase/config';

const initialState = {
  currentUser: null
}

// console.log("API", firebaseConfig)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })          
      })
  }

  this.setState({
    ...initialState
  })
 })
}



  componentWillUnmount() {
    this.authListener();
  }

  render() {

    const { currentUser } = this.state;

    return (
      <div className="App">
          <Switch>
            <Route exact 
            path="/" 
            // component={Homepage}
            render={() => (
              <HomepageLayout currentUser={currentUser}>
              <Homepage />
              </HomepageLayout>
            )}/>
            <Route 
            path="/registration" 
            // component={Registration}
            render={()=> currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}
            />
            <Route 
            path="/login" 
            render={()=> currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            )}
            />
          </Switch>
      </div>
    );

  }
  
}

export default App;
