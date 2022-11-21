import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/header.css';
import '../styles/index.css'

const Header = (props) => {
    return (
        <div className='header unselectable'>
            <div className='links'>
                <Link to="/" className='link main'>EQUATOR</Link>
                <Link to="/gallery" className='link secondary'>Галерея</Link>
                <Link to="/articles" className='link secondary'>Статьи</Link>
                <Link to="/airtickets" className='link secondary'>Авиабилеты</Link>
                <Link to="/tours" className='link secondary'>Туры</Link>
            </div>
        </div>
    )
}

export default Header;
