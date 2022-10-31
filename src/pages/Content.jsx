import React from 'react';
import '../styles/content.css';
import Item from '../components/Item.jsx';

const Content = () => {
    return (
        <div className='content'>
            <div className='column'>
                <Item info={{
                    author: 'Author 1',
                    img: 'pictures-for-equator/picture1.jpg'
                }} />
            </div>
            <div className='column'>
                <Item info={{
                    author: 'Author 1',
                    img: 'pictures-for-equator/picture2.jpg'
                }} />
            </div>
            <div className='column'>
                <Item info={{
                    author: 'Author 1',
                    img: 'pictures-for-equator/picture3.jpg'
                }} />
            </div>
            <div className='column'>
                <Item info={{
                    author: 'Author 1',
                    img: 'pictures-for-equator/picture4.jpg'
                }} />
            </div>
            <div className='column'>
                <Item info={{
                    author: 'Author 1',
                    img: 'pictures-for-equator/picture5.jpg'
                }} />
            </div>
            <div className='column'>
                <Item info={{
                    author: 'Author 1',
                    img: 'pictures-for-equator/picture6.jpg'
                }} />
            </div>
            <div className='column'>
                <Item info={{
                    author: 'Author 1',
                    img: 'pictures-for-equator/picture7.jpg'
                }} />
            </div>
            <div className='column'>
                <Item info={{
                    author: 'Author 1',
                    img: 'pictures-for-equator/picture8.jpg'
                }} />
            </div>
            <div className='column'>
                <Item info={{
                    author: 'Author 1',
                    img: 'pictures-for-equator/picture9.jpg'
                }} />
            </div>
            <div className='column'>
                <Item info={{
                    author: 'Author 1',
                    img: 'pictures-for-equator/picture10.jpg'
                }} />
            </div>
        </div>
    )
}

export default Content;