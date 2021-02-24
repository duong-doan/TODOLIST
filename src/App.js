import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { connect } from 'react-redux';
import axios from "axios";

import Sidebar from './components/main/sidebar/Sidebar';
import Nav from './components/header/nav/Nav';
import CreateTask from './components/header/createNewTask/CreateTask';
import EditContent from './components/main/content/EditContent';
import NewTaskList from './components/main/content/newTaskList/NewTaskList';
import DoingTaskList from './components/main/content/doingTaskList/DoingTaskList';
import DoneTaskList from './components/main/content/doneTaskList/DoneTaskList';
import AllTaskList from './components/main/content/allTaskList/AllTaskList';

const App = ({ onPushData }) => {

  useEffect(() => {
    axios.get('http://localhost:3000/todos')
      .then(res => onPushData(res))
  }, [])

  return (
    <Router >
      <div className="app">
        <Nav />
        <div className="main">
          <div className="main__sidebar">
            <Sidebar />
          </div>
          <div className="main__content">
            <Switch>
              <Route path="/" exact component={AllTaskList} />
              <Route path="/all" exact component={AllTaskList} />
              <Route path="/new" exact component={NewTaskList} />
              <Route path="/doing" exact component={DoingTaskList} />
              <Route path="/done" exact component={DoneTaskList} />
              <Route path="/create" exact component={CreateTask} />
              <Route path="/edit" exact component={EditContent} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.create.DATA,
    target: state.create.target
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPushData: (data) => { dispatch({ type: 'PUSH_DATA', data: data }) }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
