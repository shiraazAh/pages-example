import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom';

import Home from './pages/home/home';
import AboutUs from './pages/about-us/about-us';
import Careers from './pages/careers/careers';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink exact to="/" activeClassName="navlink-active" className="navlink">Home</NavLink>
        <NavLink exact to="/about-us" activeClassName="navlink-active" className="navlink">AboutUs</NavLink>
        <NavLink exact to="/careers" activeClassName="navlink-active" className="navlink">Careers</NavLink>
      </header>
      <Switch>
        <Route path="/careers" component={Careers} />
        <Route path="/about-us" component={AboutUs} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
  }
}

export default withRouter(App);
