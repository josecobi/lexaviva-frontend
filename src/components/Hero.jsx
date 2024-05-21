import {Container, Button} from 'react-bootstrap';
import "../index.css";
import { LinkContainer } from 'react-router-bootstrap';


const Hero = () => {
  return (
    <Container>
      <div className="hero-image">
      <div className="hero-text px-5 bg-light" >
        <h1>¡Bienvenidos a LexaViva!</h1>
        <p> &quot;Dive into Spanish Mastery: Elevate Your Vocabulary Journey with LexaViva.&quot;</p>
        <LinkContainer to='/study'>
          <Button className="btn btn-success btn-lg" role="button">Begin Your Journey</Button>
        </LinkContainer>
    
  
      <p>&quot;To have another language is to possess a second soul.&quot;<br /><br /> - <a href="https://en.wikipedia.org/wiki/Charlemagne">Charlemagne</a></p>
    </div>
    
    </div> 
    </Container>
  )
}
export default Hero;