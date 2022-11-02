import React from 'react';
import '../styles/content.css';
import Item from '../components/Item.jsx';

const top_pics = [
    'top/picture1.jpg',
    'top/picture2.jpg',
    'top/picture3.jpg',
    'top/picture4.jpg',
    'top/picture5.jpg',
    'top/picture6.jpg',
    'top/picture7.jpg',
    'top/picture8.jpg',
    'top/picture9.jpg',
    'top/picture10.jpg',
]

const Content = () => {
    return (
        <div className='content'>
            {top_pics.map(pic_path => 
                <div className='column' key={pic_path}>
                    <Item info={{
                        author: 'Author 1',
                        img: pic_path
                    }} />
                </div>
            )}
        </div>
    )
}

export default Content;