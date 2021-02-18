export const CLICK_CREATE = 'CLICK_CREATE';
export const SUBMIT_CREATE_TASK = 'SUBMIT_CREATE_TASK'
export const CLICK_TASK = 'CLICK_TASK';
export const SUBMIT_EDIT_TASK = 'SUBMIT_EDIT'

// default function to display redux action format
export const createTask = () => {

    // action object format being return to a reducer
    return {
        type: CLICK_CREATE,
        type: SUBMIT_CREATE_TASK,
        type: CLICK_TASK,
        type: SUBMIT_EDIT_TASK
    }
}