import * as TypeActions from '../constants/TypeActions';

const initState = {
}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeActions.SUBMIT_FORM_EDIT:
            const getTodoLocal = JSON.parse(localStorage.getItem('listTodo'))

            getTodoLocal[action.id].title = action.value.title
            getTodoLocal[action.id].creator = action.value.creator
            getTodoLocal[action.id].status = action.value.status
            getTodoLocal[action.id].description = action.value.description

            localStorage.setItem('listTodo', JSON.stringify(getTodoLocal))
            return state
        case TypeActions.DELETE_FORM_EDIT:
            const getTodo = JSON.parse(localStorage.getItem('listTodo'))
            const newListTodo = [...getTodo];
            const indexTodo = newListTodo.findIndex(todo => todo.id === parseInt(action.id))
            newListTodo.splice(indexTodo, 1)
            localStorage.setItem('listTodo', JSON.stringify(newListTodo))
            return state
        default:
            return state;
    }

}

export default taskReducer
