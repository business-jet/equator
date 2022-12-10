import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from './components/Header/Header'
import Router from './components/Router';

import { updateAll } from './store/articlesSlice';

import PostService from './api/PostService';

import './index.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadArticles = () => {
      return async dispatch => {
        const _articles = await PostService.getArticles()
        dispatch(updateAll(_articles))
      }
    }

    dispatch(loadArticles())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
