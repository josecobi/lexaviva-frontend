import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer';
import {Toaster}  from 'react-hot-toast';

function App() {
  
  return (    
    <div id="root">
      <Toaster position='bottom-right' toastOptions={{duration : 2000}} />
      <Header />
      <Container fluid className="App">
        <Outlet />
      </Container>


      

      <Footer /> 
  
    </div>
  )
}

export default App;
