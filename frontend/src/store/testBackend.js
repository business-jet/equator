const defaultState = {
    top_pics: []
}

const GET_TOP_PICS = 'GET_TOP_PICS'
const CLEAR_STATE = 'CLEAR_STATE'

export const testBackend = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TOP_PICS:
            console.log(action.payload)
            return {...state, top_pics: action.payload.top_pics }
        case CLEAR_STATE:
            return defaultState
        default:
            return state
    }
}

export const actionGetTopPics = (payload) => ({type: GET_TOP_PICS, payload})
export const actionClearState = (payload) => ({type: CLEAR_STATE, payload})
