import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ContentItem from '../ContentItem';

const DoneTaskList = ({ onClickedTask }) => {
    const getTodoLocal = JSON.parse(localStorage.getItem('listTodo'))
    const dataDone = getTodoLocal.filter(todo => {
        if (todo.status === 'done') {
            return todo
        }
    })

    return (
        dataDone.map(item => (
            <Link to={`/edit/${item.id}`} key={item.id}>
                <ContentItem
                    key={item.id}
                    title={item.title}
                    creator={item.creator}
                    status={item.status}
                    description={item.description}
                    clicked={() => onClickedTask(item)} />
            </Link>

        ))
    )
}

export default DoneTaskList