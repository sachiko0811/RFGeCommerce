import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration/index';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import './default.scss';

import {  } from './firebase/config';

// const initialState = {
//   currentUser: null
// }

// console.log("API", firebaseConfig)

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ...initialState
  //   }
  // }

  authListener = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
          }) 
  }

  // this.setState({
  //   ...initialState
  // })

      setCurrentUser(userAuth)
 })
}



  componentWillUnmount() {
    this.authListener();
  }

  render() {

    const { currentUser } = this.props;

    return (
      <div className="App">
          <Switch>
            <Route exact 
            path="/" 
            // component={Homepage}
            render={() => (
              <HomepageLayout 
              // currentUser={currentUser}
              >
              <Homepage />
              </HomepageLayout>
            )}/>
            <Route 
            path="/registration" 
            // component={Registration}
            render={()=> currentUser ? <Redirect to="/" /> : (
              <MainLayout 
              // currentUser={currentUser}
              >
                <Registration />
              </MainLayout>
            )}
            />
            <Route 
            path="/login" 
            render={()=> currentUser ? <Redirect to="/" /> : (
              <MainLayout 
              // currentUser={currentUser}
              >
                <Login />
              </MainLayout>
            )}
            />
            <Route 
            path="/recovery" 
            render={()=> (
              <MainLayout>
                <Recovery />
              </MainLayout>
            )}
            />
          </Switch>
      </div>
    );

  }
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
