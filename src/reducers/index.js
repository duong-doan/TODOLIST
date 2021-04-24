import { combineReducers } from 'redux';

import createTaskReducer from './createReducer';
import getDataReducer from './getDataReducer';
import taskReducer from './taskReducer'

const rootReducers = combineReducers({
    getDataReducer,
    createTaskReducer,
    taskReducer
});

export default rootReducers;