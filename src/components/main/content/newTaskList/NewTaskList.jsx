import { Link } from "react-router-dom";
import ContentItem from '../ContentItem';

const NewTaskList = ({ onClickedTask }) => {
    const getTodoLocal = JSON.parse(localStorage.getItem('listTodo'))
    const dataNew = getTodoLocal.filter(todo => {
        if (todo.status === 'new') {
            return todo
        }
    })

    return (
        dataNew.map(item => (
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

export default NewTaskList