import * as TypeActions from '../constants/TypeActions';

const initState = {
    dataSearch: []
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeActions.SUBMIT_FORM_SEARCH:
            const getTodoLocal = JSON.parse(localStorage.getItem('listTodo'))
            const listFilterTodo = getTodoLocal.filter(todo => {
                if (todo.title.toLowerCase().includes(action.value) ||
                    todo.description.toLowerCase().includes(action.value) ||
                    todo.status.toLowerCase().includes(action.value)) {
                    return todo
                }
            })

            return {
                ...state,
                dataSearch: listFilterTodo
            }

        default:
            return state
    }
}

export default searchReducer;