import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import React, { useState } from "react";
import ContentItem from "./ContentItem";

const ListContent = ({ dataTask, onClickedTask }) => {

    return dataTask.map(item => (
        <Link to="/edit">
            <ContentItem
                key={item.id}
                title={item.title}
                creator={item.creator}
                status={item.status}
                description={item.description}
                clicked={() => onClickedTask(item.id)}
            />
        </Link>
    ))
}

const mapStateToProps = state => {
    return {
        dataTask: state.create.DATA
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickedTask: (index) => { dispatch({ type: 'CLICK_TASK', id: index }) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListContent);