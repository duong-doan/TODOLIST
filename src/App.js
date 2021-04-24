import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as TypeActions from './constants/TypeActions';
import './App.scss';
import CreateTask from './components/header/createNewTask/CreateTask';
import Nav from './components/header/nav/Nav';
import AllTaskList from './components/main/content/allTaskList/AllTaskList';
import DoingTaskList from './components/main/content/doingTaskList/DoingTaskList';
import DoneTaskList from './components/main/content/doneTaskList/DoneTaskList';
import EditContent from './components/main/content/EditContent';
import NewTaskList from './components/main/content/newTaskList/NewTaskList';
import Sidebar from './components/main/sidebar/Sidebar';


const App = ({ onGetData }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [todosPerPage] = useState(12)
  // const [totalTodos, setTotalTodos] = useState(0)
  // const [currentTodos, setCurrentTodos] = useState(null)
  // if (currentTodos) {
  //   const indexOfLastTodos = currentPage * todosPerPage;
  //   const indexOfFirstTodos = indexOfLastTodos - todosPerPage;
  //   const totalTodoOnPage = currentTodos.slice(indexOfFirstTodos, indexOfLastTodos)
  // }


  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage)
  // }

  useEffect(() => {
    axios.get('https://todolist-data-2f4e2-default-rtdb.firebaseio.com/todoList.json')
      .then(res => {
        onGetData(res.data)
      }).catch(err => {
        console.log('error: ', err);
      })
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
              <Route path="/edit/:id" component={EditContent} />
            </Switch>
          </div>
        </div>
        {/* < Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          todosPerPage={todosPerPage}
          totalTodos={totalTodos}
        /> */}
      </div>
    </Router>
  );
}

// const mapStateToProps = state => {
//   return {
//     isSearch: state.create.isSearch
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    onGetData: (data) => dispatch({ type: TypeActions.GET_DATA, data })
  }
}

export default connect(null, mapDispatchToProps)(App);
