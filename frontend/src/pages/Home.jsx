import React from 'react';

import '../styles/home.css';

import ArticleCarousel from '../components/ArticlesCarousel';


const Home = () => {
    return (
        <div className='home'>
            <ArticleCarousel />
        </div>
    )
}

export default Home;
