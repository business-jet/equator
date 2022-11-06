import React from 'react';
import '../styles/item.css';

const SERVER_URL = 'http://0.0.0.0:8000/'

const Item = (props) => {
    return (
        <div className='item'>
            <h1>{props.info.author}</h1>
            <img className='item-img' src={SERVER_URL + props.info.img} alt='' />
        </div>
    )
}

export default Item;
