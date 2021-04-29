import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import * as TypeActions from '../../../constants/TypeActions';

const Nav = ({ onSubmitFormSearch }) => {
    const [value, setValue] = useState('')
    const history = useHistory()

    const hanldeSubmitFormSearch = e => {
        e.preventDefault();
        onSubmitFormSearch(value)
        history.push('/search')
    }

    return (
        <div className="header__navbar">
            <Link to="/create" className="navbar-create">
                <h2>Create new task</h2>
            </Link>
            <div className="navbar-search">
                <form id="form__search" onSubmit={hanldeSubmitFormSearch}>
                    <input type="text" id="search-box" value={value} onChange={e => { setValue(e.target.value) }} />
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitFormSearch: (value) => dispatch({ type: TypeActions.SUBMIT_FORM_SEARCH, value })
    }
}

export default connect(null, mapDispatchToProps)(Nav);