import axios from 'axios';

const SERVER_URL = 'http://localhost:8000/'

export default class PostService {
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
