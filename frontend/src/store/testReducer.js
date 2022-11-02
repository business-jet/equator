const defaultState = {
    value: 0
}

export const testReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INC_ACTION":
            return {...state, value: state.value + action.payload}
        case "DEC_ACTION":
            return {...state, value: state.value - action.payload}
        default:
            return state
    }
}
