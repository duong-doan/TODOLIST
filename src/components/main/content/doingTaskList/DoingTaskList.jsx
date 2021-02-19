import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ContentItem from '../ContentItem';

const DoingTaskList = ({ dataDoingTaskList, target }) => {
    return (
        dataDoingTaskList.map(item => (
            <Link to="/doing">
                <ContentItem
                    key={item.id}
                    title={item.title}
                    creator={item.creator}
                    status={item.status}
                    description={item.description} />
            </Link>
        ))

    )
}

const mapStateToProps = state => {
    return {
        dataDoingTaskList: state.create.arrDoingTask,
        target: state.create.target
    }
}

export default connect(mapStateToProps, null)(DoingTaskList)