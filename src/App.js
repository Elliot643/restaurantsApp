import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import LandingPage from './containers/LandingPage/LandingPage';
import UserPage from './containers/UserPage/UserPage';
import LoginPage from './containers/LoginPage/LoginPage';
import SignuPage from './containers/SignupPage/SignupPage';
import ResturantPage from './containers/ResturantPage/ResturantPage';
import ResturantsPage from './containers/ResturantsPage/ResturantsPage';
import UserUpdatePage from './containers/UserUpdatePage/UserUpdatePage';

class App extends Component {
  render() {
      return (
          <Router>
            <NavbarComponent />
                <Switch>
                  <Route path="/user">
                      <UserPage />
                  </Route>
                  <Route path="/login">
                      <LoginPage />
                  </Route>
                  <Route path="/signup">
                      <SignuPage />
                  </Route>
                  <Route path="/resturant">
                      <ResturantPage />
                  </Route>
                  <Route path="/resturants">
                      <ResturantsPage />
                  </Route>
                  <Route path="/userupdate">
                      <UserUpdatePage />
                  </Route>
                  <Route path="/">
                      <LandingPage />
                  </Route>
                </Switch>
          </Router>
      );
  }
}

export default App;


/*
<div className="App container">
              <LandingPage></LandingPage>
              <UserPage></UserPage>
          </div>
*/