import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Content from '../pages/Content';
import About from '../pages/About'
import TestRedux from '../pages/TestRedux';

import '../styles/index.css';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Content/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/test-redux' element={<TestRedux/>} />
        </Routes>
    )
}

export default Router;
