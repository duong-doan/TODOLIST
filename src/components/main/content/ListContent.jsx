import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import React from "react";
import ContentItem from "./ContentItem";

const ListContent = ({ dataTask, onClickedTask, isSearch, arrSearchForm, todos }) => {
    return isSearch ? arrSearchForm.map(item => (
        <Link to="/edit">
            <ContentItem
                key={item.id}
                title={item.title}
                creator={item.creator}
                status={item.status}
                description={item.description}
                clicked={() => onClickedTask(item)}
            />
        </Link>
    )) : null
}

const mapStateToProps = state => {
    return {
        dataTask: state.create.DATA,
        arrSearchForm: state.create.arrSearchForm,
        isSearch: state.create.isSearch,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickedTask: (item) => { dispatch({ type: 'CLICK_TASK', value: item }) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListContent);