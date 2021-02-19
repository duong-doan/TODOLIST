import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ContentItem from '../ContentItem';

const DoneTaskList = ({ dataDoneTaskList, }) => {
    return (
        dataDoneTaskList.map(item => (
            <Link >
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
        dataDoneTaskList: state.create.arrDoneTask,
    }
}

export default connect(mapStateToProps, null)(DoneTaskList)