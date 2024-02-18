import { useState } from 'react'
import './index.css'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Study from './pages/Study';
import Topics from './pages/Topics';

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
      <Footer />     
    </div>
  )
}

export default App
