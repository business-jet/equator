import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { testReducer } from './testReducer';
import { testBackend } from './testBackend';


const rootReducer = combineReducers({
    test: testReducer,
    backend: testBackend
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
