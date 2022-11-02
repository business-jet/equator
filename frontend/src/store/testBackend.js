const defaultState = {
    top_pics: []
}

export const testBackend = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_TOP_PICS':
            return action.payload
        case 'CLEAR_STATE':
            return defaultState
        default:
            return state
    }
}
