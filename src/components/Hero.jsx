import { LinkContainer } from 'react-router-bootstrap';
const Hero = () => {
  return (
    
      <div className="hero-section container">
        <div className="hero-text container p-3">
          <h1 className="hero-title mb-3">Fluent in Spanish, Fluent in Life</h1>
          <h4 className="mb-3">Elevate Your Vocabulary with LexaViva</h4>
          <LinkContainer to='/study'>
            <button className="button-primary mb-3" role="button">Begin Your Journey</button>
          </LinkContainer>
      </div>
      <img src="/assets/student-laptop-bed-flipped.avif" alt="hero-image-student-laptop" className="hero-img"></img>

    </div> 
  )
}
export default Hero;