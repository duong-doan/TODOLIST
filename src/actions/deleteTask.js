import * as TypeActions from '../constants/TypeActions';

export const deleteTask = (id) => {
    return {
        type: TypeActions.DELETE_FORM_EDIT,
        payload: id,
    }
}