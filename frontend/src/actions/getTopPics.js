import { actionGetTopPics } from "../store/contentReducer"

export const fetchTopPics = () => {
    return function(dispatch) {
        fetch('http://localhost:8000/top_pics')
            .then(response => response.json())
            .then(json => dispatch(actionGetTopPics(json)))
    }
}
