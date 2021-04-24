import * as TypeActions from '../constants/TypeActions';

export const CreateTask = (dataFormSubmit) => {
    return {
        type: TypeActions.SUBMIT_CREATE_TASK,
        payload: dataFormSubmit,
    }
}