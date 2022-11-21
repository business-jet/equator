import React from 'react';
import { useSelector } from "react-redux";
import '../styles/content.css';
import Item from '../components/Item.jsx';


const Content = () => {
    const top_pics = useSelector( state => state.content.top_pics )

    return (
        <div className='content'>
            {top_pics.map(pic => 
                <div className='column' key={pic.url}>
                    <Item info={{
                        author: pic.author,
                        img: pic.url
                    }} />
                </div>
            )}
        </div>
    )
}

export default Content;
