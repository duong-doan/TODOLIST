import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <ul>
            <Link to="/list">
                <li>all task</li>
            </Link>
            <li>new task</li>
            <li>doing task</li>
            <li>done task</li>
        </ul>
    )
}

export default Sidebar