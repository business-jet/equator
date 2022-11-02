export const fetchTopPics = () => {
    return function(dispatch) {
        fetch('http://localhost:8000/top_pics')
            .then(response => response.json())
            .then(json => dispatch({type: 'GET_TOP_PICS', payload: json}))
    }
}