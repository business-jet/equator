import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { contentReducer } from './contentReducer';
import { articlesReducer } from './articlesReducer';


const rootReducer = combineReducers({
    content: contentReducer,
    articles: articlesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
