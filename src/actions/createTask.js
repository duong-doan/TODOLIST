export const CLICK_CREATE = 'CLICK_CREATE';
export const SUBMIT_CREATE_TASK = 'SUBMIT_CREATE_TASK'
export const CLICK_TASK = 'CLICK_TASK';
export const SUBMIT_EDIT_TASK = 'SUBMIT_EDIT';
export const CLICK_NEW_SIDEBAR = 'CLICK_NEW_SIDEBAR';

// default function to display redux action format
export const createTask = () => {

    // action object format being return to a reducer
    return {
        type: CLICK_CREATE,
        type: SUBMIT_CREATE_TASK,
        type: CLICK_TASK,
        type: SUBMIT_EDIT_TASK,
        type: CLICK_NEW_SIDEBAR
    }
}