import React from 'react';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter, } from 'react-router-dom';
import { Container } from '@mui/system';
import { Route, Routes } from 'react-router';
import Trending from './components/Trending/Trending';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import Search from './components/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <>
            <Route index={true} element={<Trending/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/search" element={<Search/>}/>
            </>
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
