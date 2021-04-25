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
                description={item.description} />
        </Link>
    )) : <p>loading</p>
}

export default AllTaskList