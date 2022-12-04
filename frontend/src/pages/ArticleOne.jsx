import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import PostService from "../API/PostService";
import '../styles/article.css';

const ArticleOne = () => {
    const param_id = useParams().id
    const [article, setArticle] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await PostService.getArticle(param_id)
            setArticle(request)
        }
        fetchData()
    }, [])

    function parseDate(_date) {
        const date = new Date(_date)
        var result = String(date.getHours()) + ':' + String(date.getMinutes())
        result += ' ' + String(date.getDate()) + '.' + String(date.getMonth() + 1) + '.' + String(date.getFullYear())
        return result
    }

    return (
        <div>
            {article === undefined
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
