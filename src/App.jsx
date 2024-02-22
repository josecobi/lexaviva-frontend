import './index.css'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Study from './pages/Study';
import MyTopics from './pages/MyTopics';

function App() {
  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/about" element={<About />} />
        <Route path="/MyTopics" element={<MyTopics />} />
      </Routes>
      <Footer />     
    </div>
  )
}

export default App
