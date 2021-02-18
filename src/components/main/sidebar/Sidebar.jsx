import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = ({ clickNewTaskSidebar }) => {
    return (
        <ul>
            <Link to="/list">
                <li>All task</li>
            </Link>
            <Link to="/new">
                <li onClick={clickNewTaskSidebar}>New task</li>
            </Link>
            <li>Doing task</li>
            <li>Done task</li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        clickNewTaskSidebar: () => { dispatch({ type: 'CLICK_NEW_SIDEBAR' }) }
    }
}

export default connect(null, mapDispatchToProps)(Sidebar);