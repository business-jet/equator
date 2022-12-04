import { actionGetArticles } from "../store/articlesReducer"

export const fetchArticles = () => {
    return function(dispatch) {
        fetch('http://localhost:8000/api/articles')
            .then(response => response.json())
            .then(json => dispatch(actionGetArticles(json)))
    }
}
