export const hello = (state="пока", action) => {
    const {type, payload} = action;

    if(type === "HELLO_SUCCESS") {
        return payload.str;
    }

    return state;
}