import { createSlice } from "@reduxjs/toolkit";


const articlesSlice = createSlice({
    name: 'articles',

    initialState: {
        articles: [],
        articleByID: null
    },
    
    reducers: {
        updateAll(state, action) {
            state.articles = action.payload
        },
        updateArticleByID(state, action) {
            state.articleByID = action.payload
        }
    }
})

export default articlesSlice.reducer
export const { updateAll, updateArticleByID } = articlesSlice.actions
