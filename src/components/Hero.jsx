import {Container, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const Hero = () => {
  return (
    
      <div className="hero-section container">
        <div className="hero-text container p-3">
          <h1 className="hero-title mb-3">Fluent in Spanish, Fluent in Life</h1>
          <h4 className="mb-3">Elevate Your Vocabulary with LexaViva</h4>
          <LinkContainer to='/study'>
            <Button className="button mb-3" role="button">Begin Your Journey</Button>
          </LinkContainer>
      </div>
      <img src="/src/assets/student-laptop-bed-flipped.avif" alt="hero-image-student-laptop" className="hero-img"></img>

    </div> 
  )
}
export default Hero;

// const Hero = () => {
//   return (
    
//       <div className="hero-image">
//       <div className="hero-text px-5 bg-light" >
//         <h1>¡Bienvenidos a LexaViva!</h1>
//         <p>Dive into Spanish Mastery: Elevate Your Vocabulary Journey with LexaViva.&quot;</p>
//         <LinkContainer to='/study'>
//           <Button className="btn btn-success btn-lg mb-3" role="button">Begin Your Journey</Button>
//         </LinkContainer>
    
  
//       <p>&quot;To have another language is to possess a second soul.&quot; - <a href="https://en.wikipedia.org/wiki/Charlemagne">Charlemagne</a></p>
//     </div>
    
//     </div> 
//   )
// }
// export default Hero;