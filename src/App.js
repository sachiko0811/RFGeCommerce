import React from 'react';
import Header from './components/Header';
import Homepage from './pages/Homepage/index';
import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
