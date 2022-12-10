import React from 'react';
import { useSelector } from "react-redux";
import ArticleCarousel from '../../components/ArticlesCarousel/ArticlesCarousel';
import styles from './Home.module.css';

const Home = () => {
    const carousel_articles = useSelector( state => state.articles.articles )

    return (
        <div className={styles.home}>
            <ArticleCarousel data = {{
                title: 'Лучшие сатьи по версии NEW York Times:',
                articles: carousel_articles
            }}/>
            <ArticleCarousel data = {{
                title: 'Лучшее по версии Equator:',
                articles: carousel_articles.filter(article => article.score > 0)
            }}/>
        </div>
    )
}

export default Home;
