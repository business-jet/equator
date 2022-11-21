import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Content from '../pages/Content';
import Articles from '../pages/Articles';
import About from '../pages/About'
import TestRedux from '../pages/TestRedux';

import '../styles/index.css';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Content/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/test-redux' element={<TestRedux/>} />
            <Route path='/articles' element={<Articles/>} />
        </Routes>
    )
}

export default Router;
