import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <div id="page-body"> 
            <Routes>
              <Route path="/" element= { <HomePage />} exact /> 
              <Route path="/about" element= { <AboutPage />}  /> 
              <Route path="/articles-list" element= { <ArticlesList />}  /> 
              <Route path="/article" element= { <ArticlePage />}  /> 
            </Routes>
          </div>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
