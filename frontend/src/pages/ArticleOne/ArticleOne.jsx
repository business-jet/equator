import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import PostService from "../../api/PostService";
import { updateArticleByID } from "../../store/articlesSlice";
import MarkdownView from 'react-showdown';
import styles from './ArticleOne.module.css';

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

        if ( article == null || param_id !== article.id )
            dispatch(loadArticleByID())
    }, [dispatch, param_id, article])

    function parseDate(_date) {
        const date = new Date(_date)
        var result = String(date.getHours()) + ':' + String(date.getMinutes())
        result += ' ' + String(date.getDate()) + '.' + String(date.getMonth() + 1) + '.' + String(date.getFullYear())
        return result
    }

    return (
        <div className={styles.article}>
            {article === null
                ?
                <div className={styles.articleLoading}>
                    Загрузка...
                </div>
                :
                <div className={styles.articleContent}>
                    <h1 className={styles.articleTitle}>{article.title}</h1>
                    { article.picture_url.trim() !== '' && 
                        <img src={article.picture_url} alt='' />
                    }
                    <MarkdownView markdown={article.text} options={{}} />
                    <div className={styles.articlePublished}>Опубликовано: {parseDate(article.date)}</div>
                </div>
            }
        </div>
    )
}

export default ArticleOne;
