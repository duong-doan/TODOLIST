import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ContentItem from "../ContentItem";

const AllTaskList = ({ onClickedTask }) => {
    const dataAllTask = JSON.parse(localStorage.getItem('listTodo'))

    return dataAllTask ? dataAllTask.map(item => (
        <Link to={`/edit/${item.id}`} key={item.id}>
            <ContentItem
                title={item.title}
                creator={item.creator}
                status={item.status}
                description={item.description}
                clicked={() => onClickedTask(item)} />
        </Link>
    )) : <p>loading</p>
}

const mapStateToProps = state => {
    return {
        data: state.getDataReducer.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickedTask: (item) => { dispatch({ type: 'CLICK_TASK', value: item }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTaskList)