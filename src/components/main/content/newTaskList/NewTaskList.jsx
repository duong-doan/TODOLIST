import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ContentItem from '../ContentItem';
import Pagination from "../../../footer/Pagination";
import { useState } from "react";
import { CLICK_TASK } from '../../../../actions/createTask'

const NewTaskList = ({ dataNewTaskList, target, onClickedTask }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(12)
    const [totalTodos] = useState(dataNewTaskList.length)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const indexOfLastTodos = currentPage * todosPerPage;
    const indexOfFirstTodos = indexOfLastTodos - todosPerPage;
    const currentTodos = dataNewTaskList.slice(indexOfFirstTodos, indexOfLastTodos)

    return (
        <>
            {target === 'new' ? currentTodos.map(item => (
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
            ) : null}
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
        dataNewTaskList: state.create.arrNew,
        target: state.create.target
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickedTask: (item) => { dispatch({ type: CLICK_TASK, value: item }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskList)