import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Router from './components/Router';

import { fetchArticles } from './actions/getArticles';

import './styles/index.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
