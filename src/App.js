import React from 'react';
import { Switch, Route } from 'react-router-dom';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration/index'
import './default.scss';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact 
          path="/" 
          // component={Homepage}
          render={() => (
            <HomepageLayout>
            <Homepage />
            </HomepageLayout>
          )}/>
          <Route 
          path="/registration" 
          // component={Registration}
          render={()=> (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
          />
        </Switch>
    </div>
  );
}

export default App;
