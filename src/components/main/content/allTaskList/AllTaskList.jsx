import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ContentItem from '../ContentItem';
import Pagination from '../../../footer/Pagination';
import { useState } from "react";

const AllTaskList = ({ dataAllTaskList, isSearch, arrSearchForm, onClickedTask }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(12)
    const [totalTodos] = useState(dataAllTaskList.length)
    // const [totalTodosSearch] = useState(arrSearchForm.length)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const indexOfLastTodos = currentPage * todosPerPage;
    const indexOfFirstTodos = indexOfLastTodos - todosPerPage;
    const currentTodos = dataAllTaskList.slice(indexOfFirstTodos, indexOfLastTodos)

    const indexOfLastTodosSearch = currentPage * todosPerPage;
    const indexOfFirstTodosSearch = indexOfLastTodos - todosPerPage;
    const currentTodosSearch = arrSearchForm.slice(indexOfFirstTodosSearch, indexOfLastTodosSearch)

    return (
        <>
            {(isSearch ? currentTodosSearch : currentTodos).map(item => (
                <Link to="edit">
                    <ContentItem
                        key={item.id}
                        title={item.title}
                        creator={item.creator}
                        status={item.status}
                        description={item.description}
                        clicked={() => onClickedTask(item)} />
                </Link>

            ))}
            < Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
                todosPerPage={todosPerPage}
                totalTodos={totalTodos}
            // totalSearchTodos={totalTodosSearch}
            />
        </>
    )

}

const mapStateToProps = state => {
    return {
        dataAllTaskList: state.create.DATA,
        target: state.create.target,
        arrSearchForm: state.create.arrSearchForm,
        isSearch: state.create.isSearch
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickedTask: (item) => { dispatch({ type: 'CLICK_TASK', value: item }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTaskList)