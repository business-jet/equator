const defaultState = {
    value: 0
}

const INC_ACTION = 'INC_ACTION'
const DEC_ACTION = 'DEC_ACTION'

export const testReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INC_ACTION:
            return {...state, value: state.value + action.payload}
        case DEC_ACTION:
            return {...state, value: state.value - action.payload}
        default:
            return state
    }
}

export const actionInc = (payload) => ({type: INC_ACTION, payload})
export const actionDec = (payload) => ({type: DEC_ACTION, payload})
