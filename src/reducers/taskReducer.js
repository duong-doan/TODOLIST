import * as TypeActions from '../constants/TypeActions';

const taskReducer = (state = {}, action) => {
    switch (action.type) {
        case TypeActions.SUBMIT_FORM_EDIT:
            const getTodoLocal = JSON.parse(localStorage.getItem('listTodo'))
            const newTodoLocal = [...getTodoLocal]

            newTodoLocal[action.id].title = action.value.title
            newTodoLocal[action.id].creator = action.value.creator
            newTodoLocal[action.id].status = action.value.status
            newTodoLocal[action.id].description = action.value.description

            localStorage.setItem('listTodo', JSON.stringify(newTodoLocal))
            return state
        default:
            return state;
    }

}

export default taskReducer
