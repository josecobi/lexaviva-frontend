import { LinkContainer } from 'react-router-bootstrap';
import {Container, Row, Col} from 'react-bootstrap'
const Hero = () => {
  return (
    
      <Container className="hero-section d-flex container">

        <Row className="hero-text justify-content-center align-items-center p-3">
          <Col sm={12} md={6}>
          <h1 className="hero-title mb-3">Fluent in Spanish, Fluent in Life</h1>
          <h4 className="mb-3">Elevate Your Vocabulary with LexaViva</h4>
          <LinkContainer to='/study'>
            <button className="button-primary mb-3" role="button">Begin Your Journey</button>
          </LinkContainer>
          </Col>
          <Col sm={12} md={6}>
            <img src="/assets/students-hero-img.svg" alt="hero-image-student-laptop" className="hero-img"></img>
          </Col>
      </Row>

    </Container> 
  )
}
export default Hero;