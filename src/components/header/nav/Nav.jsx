import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Nav = ({ clickCreate }) => {
    return (
        <div className="header__navbar">
            <Link to="/create">
                <h2 onClick={clickCreate}>Create new task</h2>
            </Link>
            <div className="navbar-search">
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        clickCreate: () => { dispatch({ type: 'CLICK_CREATE' }) }
    }
}

export default connect(null, mapDispatchToProps)(Nav);