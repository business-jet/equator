import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from './components/Header/Header'
import Router from './components/Router';

import { updateAll } from './store/articlesSlice';
import { updateSize } from './store/generalSlice';

import PostService from './api/PostService';

import './index.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const updateWindowSize = () => {
      dispatch(updateSize({ width: window.innerWidth, height: window.innerHeight }))
    }

    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)

    const loadArticles = () => {
      return async dispatch => {
        const _articles = await PostService.getArticles()
        dispatch(updateAll(_articles))
      }
    }

    dispatch(loadArticles())

    return () => {
      window.removeEventListener('resize', updateWindowSize)
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
