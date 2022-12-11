import React, { useEffect } from 'react';
import Slider from 'react-slick';
import ArticleElement from '../ArticleElement/ArticleElement';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ArticleCarousel.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { updateCarouselSettings } from '../../store/articlesSlice';

const ArticleCarousel = (props) => {
    const dispatch = useDispatch()
    const general_size = useSelector( state => state.general )
    const state_settings = useSelector( state => state.articles.carouselSettings )

    useEffect(() => {
        if ( general_size.width < 1000 )
            dispatch(updateCarouselSettings({ slidesToShow: 1 }))
        else if ( general_size.width < 1500 )
            dispatch(updateCarouselSettings({ slidesToShow: 2 }))
        else
            dispatch(updateCarouselSettings({ slidesToShow: 3 }))
    }, [general_size, state_settings, dispatch])

    return (
        <div className={styles.sliderContainer}>
            <p>{props.data.title}</p>
            <Slider {...state_settings}>
                { props.data.articles.map(article =>
                    <ArticleElement info={article} key={article.id}/>
                ) }
            </Slider>
        </div>
    )
}

export default ArticleCarousel;
