import { combineReducers } from 'redux';

// calling the default reducer to create a link
import createReducer from './createReducer';

const rootReducers = combineReducers({
    // add reducer files references here
    create: createReducer
});

export default rootReducers;