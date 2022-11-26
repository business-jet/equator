import React from 'react';
import { Route, Routes } from 'react-router-dom'

import AirTickets from '../pages/Airtickets';
import Articles from '../pages/Articles';
import ArticleOne from '../pages/ArticleOne';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import Tours from '../pages/Tours';

import '../styles/index.css';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route exact path='/articles' element={<Articles/>} />
            <Route exact path='/articles/:id' element={<ArticleOne />} />
            <Route path='/airtickets' element={<AirTickets/>} />
            <Route path='/tours' element={<Tours/>} />
        </Routes>
    )
}

export default Router;
