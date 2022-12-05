import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import PostService from "../api/PostService";
import { updateArticleByID } from "../store/articlesSlice";
import '../styles/article.css';

const ArticleOne = () => {
    const dispatch = useDispatch()
    const param_id = useParams().id
    const article = useSelector( state => state.articles.articleByID )

    useEffect(() => {
        const loadArticleByID = () => {
            return async dispatch => {
                const _article = await PostService.getArticle(param_id)
                return dispatch(updateArticleByID(_article))
            }
        }

        dispatch(loadArticleByID())
    }, [dispatch, param_id])

    function parseDate(_date) {
        const date = new Date(_date)
        var result = String(date.getHours()) + ':' + String(date.getMinutes())
        result += ' ' + String(date.getDate()) + '.' + String(date.getMonth() + 1) + '.' + String(date.getFullYear())
        return result
    }

    return (
        <div>
            {article === null
                ?
                <div className="article-loading">
                    Загрузка...
                </div>
                :
                <div className="article">
                    <h1>{article.title}</h1>
                    <img src={article.picture_url} alt=''/>
                    <div>{article.text}</div>
                    <p>Опубликовано: {parseDate(article.date)}</p>
                </div>
            }
        </div>
    )
}

export default ArticleOne;
