import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ContentItem from '../ContentItem';
import { CLICK_TASK } from "../../../../actions/createTask";
import { useState } from "react";
import Pagination from "../../../footer/Pagination";

const DoneTaskList = ({ dataDoneTaskList, target, onClickedTask }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(12)
    const [totalTodos] = useState(dataDoneTaskList.length)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const indexOfLastTodos = currentPage * todosPerPage;
    const indexOfFirstTodos = indexOfLastTodos - todosPerPage;
    const currentTodos = dataDoneTaskList.slice(indexOfFirstTodos, indexOfLastTodos)

    return (
        <>
            {currentTodos.map(item => (
                <Link to="edit">
                    <ContentItem
                        key={item.id}
                        title={item.title}
                        creator={item.creator}
                        status={item.status}
                        description={item.description}
                        clicked={() => onClickedTask(item)} />
                </Link>

            )
            )}
            < Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
                todosPerPage={todosPerPage}
                totalTodos={totalTodos}
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
        dataDoneTaskList: state.create.arrDone,
        target: state.create.target
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickedTask: (item) => { dispatch({ type: CLICK_TASK, value: item }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneTaskList)