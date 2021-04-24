import * as TypeActions from "../constants/TypeActions";

const initState = {
    data: []
}

const getDataReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeActions.GET_DATA:
            localStorage.setItem('listTodo', JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }

}

export default getDataReducer;