import axios from 'axios';
import { apiPath } from '../helpers/urlHelper';

export default class PostService {
    static async getArticles() {
        try {
            const response = await axios.get(apiPath('articles'))
            return response.data
        }
        catch (e) {
            console.log('API getArticle ERROR:')
            console.log(e)
        }
    }

    static async getArticle(id) {
        try {
            const response = await axios.get(apiPath('articles/' + id))
            return response.data
        }
        catch (e) {
            console.log('API getArticle ERROR:')
            console.log(e)
        }
    }
}
