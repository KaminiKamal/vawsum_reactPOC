import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import FeedList from "./FeedList.jsx";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={"/"} component={ FeedList } />
      </Router>
    );
  }
}

export default App;
