import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './pages/NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar /> 
          <div id="page-body"> 
            <Routes>
              <Route path="/" element= { <HomePage />}  exact /> 
              <Route path="/about" element= { <AboutPage />}  /> 
              <Route path="/articles-list" element= { <ArticlesListPage />}  /> 
              <Route path="/article/:name" element= { <ArticlePage />}  />
              <Route path="*" element= { <NotFoundPage />} /> 
            </Routes>
          </div>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
