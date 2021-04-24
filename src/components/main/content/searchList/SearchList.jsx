import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ContentItem from '../ContentItem';


const SearchList = ({ dataSearch, isSearch, onClickedTask }) => {
    console.log(dataSearch);
    return (
        <>
            {isSearch ? dataSearch.map((item =>
                <Link to="/edit">
                    <ContentItem
                        key={item.id}
                        title={item.title}
                        creator={item.creator}
                        status={item.status}
                        description={item.description}
                        clicked={() => onClickedTask(item)} />
                </Link>
            )) : null}
        </>
    );
}

const mapStateToProps = state => {
    return {
        dataSearch: state.create.arrSearchForm,
        isSearch: state.create.isSearch
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickedTask: (item) => { dispatch({ type: 'CLICK_TASK', value: item }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);