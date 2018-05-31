import React, { Component } from 'react';
import Login from './authenticationAgent/login';
import Signup from './authenticationAgent/signup';
import Signup2 from './authenticationAgent/signup2';
import Start from './start';
import Home from './homeAgent/home';
import Categories from './categories';
import { HashRouter as Router, Route, Switch } from "react-router-dom";




class App extends Component {
  render() {
    return (
  <div className="App">
  <Router>
    <Switch>
      <Route exact path="/" component={Start}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/signup2" component={Signup2}/>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/categories" component={Categories}/>
    </Switch>
  </Router>
  </div>
    );
  }
}

export default App;
