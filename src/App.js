import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Routes, Route } from 'react-router-dom';
import './scss/main.scss';

function App() {
  return (
    <>
          <Header />
            <Routes>
              <Route path='/' element={<Home/>} />
            </Routes>
          <Footer />
    </>
  );
}

export default App;
