import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

//hoc
import WithAuth from './hoc/withAuth';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration/index';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import './default.scss';

import {  } from './firebase/config';

// const initialState = {
//   currentUser: null
// }

// console.log("API", firebaseConfig)

const App = props => {

  const dispatch = useDispatch();
  // const { setCurrentUser } = props; // currentUser is coming from redux store

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }))
        })
      }

      dispatch(setCurrentUser(userAuth));
    })

    return () => {
      authListener();
    }

  }, [])

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
            render={()=> (
              <MainLayout 
              // currentUser={currentUser}
              >
                <Registration />
              </MainLayout>
            )}
            />
            <Route 
            path="/login" 
            render={()=> (
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
            <Route 
            path="/dashboard" 
            render={()=> (
              <WithAuth>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </WithAuth>
            )}
            />
          </Switch>
      </div>
    );

  }
  


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default App;
