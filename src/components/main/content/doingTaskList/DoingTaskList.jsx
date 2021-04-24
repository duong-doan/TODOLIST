import { Link } from "react-router-dom";
import ContentItem from '../ContentItem';

const DoingTaskList = ({ onClickedTask }) => {
    const getTodoLocal = JSON.parse(localStorage.getItem('listTodo'))
    const dataDoing = getTodoLocal.filter(todo => {
        if (todo.status === 'doing') {
            return todo
        }
    })

    return (
        dataDoing.map(item => (
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

export default DoingTaskList