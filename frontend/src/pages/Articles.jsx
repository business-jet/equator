import React from 'react';
import { useSelector } from "react-redux";
import '../styles/article-element.css';
import ArticleElement from '../components/ArticleElement';


const Articles = () => {
    const articles = useSelector( state => state.articles.articles )

    return (
        <div className='articles'>
            { articles.map(article => 
                <div className='articles-column' key={article.id}>
                    <ArticleElement info={article} />
                </div>
            ) }
        </div>
    )
}

export default Articles;
