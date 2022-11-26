import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/article-element.css';

const ArticleElement = (props) => {
    const navigate = useNavigate()
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
            <div style={{position: 'relative'}}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onClick={() => navigate('/articles/' + props.info.id) }
            >
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

export default ArticleElement;
