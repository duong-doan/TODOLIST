import * as TypeActions from '../constants/TypeActions';

export const valueEditAction = (value, id) => {
    return {
        type: TypeActions.SUBMIT_FORM_EDIT,
        payload: {
            value,
            id
        }
    }
}