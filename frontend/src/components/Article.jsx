import React, {useState} from 'react';
import '../styles/article.css';

const Article = (props) => {
    const defaultStyle = 'article-img'
    const enterStyle = 'article-img article-img--enter'
    const [isEnter, setIsEnter] = useState(false)
    const [imgStyle, setImgStyle] = useState(defaultStyle)

    function handleMouseEnter() {
        setIsEnter(true)
        setImgStyle(enterStyle)
    }

    function handleMouseLeave() {
        setIsEnter(false)
        setImgStyle(defaultStyle)
    }

    return (
        <div className='article-container'>
            <div style={{position: 'relative'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className={imgStyle}
                    src={props.info.picture_urls[0]} // src={SERVER_URL + props.info.picture_url}
                    alt=''
                />
                <div className='article-container--info'>
                    {props.info.title}
                </div>
                {/* { isEnter &&
                    <div className='article-container--info'>
                        <h2>{props.info.title}</h2>
                    </div>
                } */}
            </div>
        </div>
    )
}

export default Article;
