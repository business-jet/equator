import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Router from './components/Router';

import { fetchTopPics } from './actions/getTopPics';

import './styles/index.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTopPics())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
