import {combineReducers, configureStore} from '@reduxjs/toolkit';
import articlesSlice from './articlesSlice';

const rootReducer = combineReducers({
    articles: articlesSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
