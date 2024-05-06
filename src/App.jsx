import './index.css'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Study from './pages/Study';
import MyTopics from './pages/MyTopics';
import Login from './pages/Login';
import Register from './pages/Register';
import toast, {Toaster}  from 'react-hot-toast';

function App() {
  
  return (
    <div className="App">
      <Nav />
      <Toaster position='bottom-right' toastOptions={{duration : 2000}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/about" element={<About />} />
        <Route path="/MyTopics" element={<MyTopics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />     
    </div>
  )
}

export default App
