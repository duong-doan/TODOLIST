import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ContentItem from '../ContentItem';


const SearchList = ({ dataSearch }) => {
    console.log(dataSearch);

    return (
        dataSearch.map((item =>
            <Link to="/edit">
                <ContentItem
                    key={item.id}
                    title={item.title}
                    creator={item.creator}
                    status={item.status}
                    description={item.description} />
            </Link>
        ))
    );
}

const mapStateToProps = state => {
    return {
        dataSearch: state.searchReducer.dataSearch,
    }
}

export default connect(mapStateToProps, null)(SearchList);