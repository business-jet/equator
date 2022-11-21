const defaultState = {
    articles: []
}

const GET_ARTICLES = 'GET_ARTICLES'

export const articlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return {...state, articles: action.payload }
        default:
            return state
    }
}

export const actionGetArticles = (payload) => ({type: GET_ARTICLES, payload})
