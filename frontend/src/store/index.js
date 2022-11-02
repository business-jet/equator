import { createStore, combineReducers } from 'redux';
import { testReducer } from './testReducer';


const rootReducer = combineReducers({
    test: testReducer
})

export const store = createStore(rootReducer)
