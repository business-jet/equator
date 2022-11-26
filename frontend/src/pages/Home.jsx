import React from 'react';
import { useSelector } from "react-redux";
import ArticleCarousel from '../components/ArticlesCarousel';
import '../styles/home.css';

const Home = () => {
    const carousel_articles = useSelector( state => state.articles.articles )

    return (
        <div className='home'>
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
