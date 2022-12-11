import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
    name: 'general',

    initialState: {
        width: 0,
        height: 0,
    },
    
    reducers: {
        updateSize(state, action) {
            state.width = action.payload.width
            state.height = action.payload.height
        },
    }
})

export default generalSlice.reducer
export const { updateSize } = generalSlice.actions
