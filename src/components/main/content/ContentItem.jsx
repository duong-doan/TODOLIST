import { connect } from "react-redux";
import React from 'react'

const ContentItem = ({ title, creator, status, description, clicked }) => {
    return (
        <div className="main__content-item" onClick={clicked}>
            <h6>Title: {title}</h6>
            <p>Creator: {creator}</p>
            <p>status: {status}</p>
            <p>description:</p>
            <p className="item__content">{description}</p>
        </div>
    )
}


export default ContentItem;