import React from 'react';
import '../styles/item.css';

const Item = (props) => {
    return (
        <div className='item'>
            <h1>{props.info.author}</h1>
            <img className='item-img' src={props.info.img} alt='' />
        </div>
    )
}

export default Item;
