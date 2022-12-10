import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.links}>
                <Link to="/" className={styles.mainLink}>EQUATOR</Link>
                <Link to="/gallery" className={styles.secondaryLink}>Галерея</Link>
                <Link to="/articles" className={styles.secondaryLink}>Статьи</Link>
                <Link to="/airtickets" className={styles.secondaryLink}>Авиабилеты</Link>
                <Link to="/tours" className={styles.secondaryLink}>Туры</Link>
            </div>
        </div>
    )
}

export default Header;
