import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Content from './pages/Content';
import About from './pages/About'
import TestRedux from './pages/TestRedux';

import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Content/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/test-redux' element={<TestRedux/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
