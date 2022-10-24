export const helloAction = (str) => dispatch => {
    dispatch({type: "HELLO_SUCCESS", payload: {str: str}});
}