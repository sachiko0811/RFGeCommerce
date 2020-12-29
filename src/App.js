import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

//components
import AdminToolbar from './components/AdminToolbar';

//hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration/index';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
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
    dispatch(checkUserSession());    

  }, []);

    return (
      <div className="App">
        <AdminToolbar />
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
            <Route 
            path="/admin" 
            render={()=> (
              <WithAdminAuth>
                <MainLayout>
                  <Admin />
                </MainLayout>
              </WithAdminAuth>
            )}
            />
          </Switch>
      </div>
    );

  }
  


// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// })

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })
export default App;
