import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = ({ clickNewTaskSidebar, clickDoingTaskSidebar, clickDoneTaskSidebar, clickAllTaskSidebar }) => {

    return (
        <ul>
            <Link to="/all">
                <li onClick={clickAllTaskSidebar}>All task</li>
            </Link>
            <Link to="/new">
                <li onClick={clickNewTaskSidebar}>New task</li>
            </Link>
            <Link to="/doing">
                <li onClick={clickDoingTaskSidebar}>Doing task</li>
            </Link>
            <Link to="/done">
                <li onClick={clickDoneTaskSidebar}>Done task</li>
            </Link>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        clickNewTaskSidebar: () => { dispatch({ type: 'CLICK_NEW_SIDEBAR' }) },
        clickDoingTaskSidebar: () => { dispatch({ type: 'CLICK_DOING_SIDEBAR' }) },
        clickDoneTaskSidebar: () => { dispatch({ type: 'CLICK_DONE_SIDEBAR' }) },
        clickAllTaskSidebar: () => { dispatch({ type: 'CLICK_ALLTASK_SIDEBAR' }) }
    }
}

export default connect(null, mapDispatchToProps)(Sidebar);