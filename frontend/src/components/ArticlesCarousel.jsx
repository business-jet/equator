import React from 'react';
import Slider from 'react-slick';
import ArticleElement from './ArticleElement';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css'

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
        <div className='slider-container'>
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
