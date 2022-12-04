import axios from 'axios';

const SERVER_URL = 'http://localhost:8000/api/'

export default class PostService {
    static async getArticles() {
        try {
            const response = await axios.get(SERVER_URL + 'articles')
            return response.data
        }
        catch (e) {
            console.log('API getArticle ERROR:')
            console.log(e)
        }
    }

    static async getArticle(id) {
        try {
            const response = await axios.get(SERVER_URL + 'articles/' + id)
            return response.data
        }
        catch (e) {
            console.log('API getArticle ERROR:')
            console.log(e)
        }
    }
}
