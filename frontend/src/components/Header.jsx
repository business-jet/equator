import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='header-inner'>
                E Q U A T O R
            </div>
            <hr style={{width: '95%', borderColor: 'rgb(231, 211, 27)'}} />
            <div className='links'>
                <Link to="/" className='link'>Главная</Link>
                <Link to="/articles" className='link'>Статьи</Link>
                <Link to="/about" className='link'>О нас</Link>
                <Link to="/test-redux" className='link'>Test Redux</Link>
            </div>
        </div>
    )
}

export default Header;
