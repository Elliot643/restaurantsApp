import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage/LandingPage';
import UserPage from './containers/UserPage/UserPage';


class App extends Component {
  render() {
      return (
          <div className="App container">
              <LandingPage></LandingPage>
              <UserPage></UserPage>
          </div>
      );
  }
}

export default App;
