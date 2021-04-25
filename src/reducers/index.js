import { combineReducers } from 'redux';

import createTaskReducer from './createReducer';
import getDataReducer from './getDataReducer';
import taskReducer from './taskReducer';
import searchReducer from './searchReducer'

const rootReducers = combineReducers({
    getDataReducer,
    createTaskReducer,
    taskReducer,
    searchReducer
});

export default rootReducers;