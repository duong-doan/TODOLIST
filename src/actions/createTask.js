export const CLICK_CREATE = 'CLICK_CREATE';
export const SUBMIT_CREATE_TASK = 'SUBMIT_CREATE_TASK'
export const CLICK_TASK = 'CLICK_TASK';
export const SUBMIT_EDIT_TASK = 'SUBMIT_EDIT';
export const CLICK_NEW_SIDEBAR = 'CLICK_NEW_SIDEBAR';
export const CLICK_DOING_SIDEBAR = 'CLICK_DOING_SIDEBAR';
export const CLICK_DONE_SIDEBAR = 'CLICK_DONE_SIDEBAR';
export const RESET_FORM_EDIT = 'RESET_FORM_EDIT';
export const DELETE_FORM_EDIT = 'DELETE_FORM_EDIT'

// default function to display redux action format
export const createTask = () => {

    // action object format being return to a reducer
    return {
        type: CLICK_CREATE,
        type: SUBMIT_CREATE_TASK,
        type: CLICK_TASK,
        type: SUBMIT_EDIT_TASK,
        type: CLICK_NEW_SIDEBAR,
        type: CLICK_DOING_SIDEBAR,
        type: CLICK_DONE_SIDEBAR,
        type: RESET_FORM_EDIT,
        type: DELETE_FORM_EDIT
    }
}