import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const Nav = ({ clickCreate, onSubmitFormSearch }) => {
    const [searchTask, setSearchTask] = useState({
        value: ''
    })

    const hanldeSubmitFormSearch = e => {
        e.preventDefault();
        onSubmitFormSearch(searchTask)
    }

    return (
        <div className="header__navbar">
            <Link to="/create">
                <h2 onClick={clickCreate}>Create new task</h2>
            </Link>
            <div className="navbar-search">
                <form id="form__search" onSubmit={hanldeSubmitFormSearch}>
                    <input type="text" id="search-box" value={searchTask.value} onChange={e => { setSearchTask({ value: e.target.value }) }} />
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        clickCreate: () => { dispatch({ type: 'CLICK_CREATE' }) },
        onSubmitFormSearch: (valueSearch) => { dispatch({ type: 'SUBMIT_FORM_SEARCH', value: valueSearch }) }
    }
}

export default connect(null, mapDispatchToProps)(Nav);