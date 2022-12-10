import React from 'react';
import Slider from 'react-slick';
import ArticleElement from '../ArticleElement/ArticleElement';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ArticleCarousel.module.css';

const ArticleCarousel = (props) => {
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        swipeToSlide: true
      };

    return (
        <div className={styles.sliderContainer}>
            <p>{props.data.title}</p>
            <Slider {...settings}>
                { props.data.articles.map(article =>
                    <ArticleElement info={article} key={article.id}/>
                ) }
            </Slider>
        </div>
    )
}

export default ArticleCarousel;
