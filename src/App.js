import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import Sidebar from './components/main/sidebar/Sidebar';
import ListContent from './components/main/content/ListContent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/header/nav/Nav';
import CreateTask from './components/header/createNewTask/CreateTask';
import EditContent from './components/main/content/EditContent';



const App = () => {

  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="main" style={{ display: 'flex' }}>
          <div className="main__sidebar">
            <Sidebar />
          </div>
          <div className="main__content" style={{ display: 'flex' }}>
            <Switch>
              <Route path="/list" exact component={ListContent} />
              <Route path="/edit" exact component={EditContent} />
              <Route path="/create" exact component={CreateTask} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default connect(null, null)(App);
