import {combineReducers, configureStore} from '@reduxjs/toolkit';
import articlesSlice from './articlesSlice';
import generalSlice from './generalSlice';

const rootReducer = combineReducers({
    articles: articlesSlice,
    general: generalSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
