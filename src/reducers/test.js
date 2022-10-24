export const test = (state=0, action) => {
    const {type, payload} = action;

    if(type === "TEST_SUCCESS") {
        return state + 1;
    }

    return state;
}