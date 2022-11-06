import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { testReducer } from './testReducer';
import { contentReducer } from './contentReducer';


const rootReducer = combineReducers({
    test: testReducer,
    content: contentReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
