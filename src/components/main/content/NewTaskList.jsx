import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ContentItem from './ContentItem';

const NewTaskList = ({ dataNewTaskList, target }) => {
    return (
        dataNewTaskList.map(item => (
            <ContentItem
                key={item.id}
                title={item.title}
                creator={item.creator}
                status={item.status}
                description={item.description} />
        ))
    )
}

const mapStateToProps = state => {
    return {
        dataNewTaskList: state.create.arrNewTask,
        target: state.create.target
    }
}

export default connect(mapStateToProps, null)(NewTaskList)