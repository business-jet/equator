import React from 'react';
import { useSelector } from "react-redux";
import ArticleElement from '../../components/ArticleElement/ArticleElement';
import styles from './Articles.module.css';

const Articles = () => {
    const articles = useSelector( state => state.articles.articles )

    return (
        <div className={styles.articles}>
            { articles.map(article => 
                <div className={styles.articlesColumn} key={article.id}>
                    <ArticleElement info={article} />
                </div>
            ) }
        </div>
    )
}

export default Articles;
