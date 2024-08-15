
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

// function Footer() {
//   return (
//     <Footer className="page-footer">
      
//       <Row className="p-3 mb-2 mx-0">
//         <Col xs lg="3" className="align-self-center">
//           <img
//             alt="LexaViva Logo"
//             src="/assets/brand.svg"
//             width="120"
//             height="30"
//             className="mb-2"
//           />
//         </Col>
       
//         <Col xs lg="3">
//           <p className="pages-title-secondary mb-1">Navigation</p>
//           <nav className="d-flex">
//             <LinkContainer to='/'>  
//               <li><Nav.Link>Home</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to='/study'>
//               <li><Nav.Link>Study</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to='/about'>
//               <li><Nav.Link>About</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to='/mytopics'>
//               <li><Nav.Link>My Topics</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to='/dashboard'>
//               <li><Nav.Link>Dashboard</Nav.Link>
//             </LinkContainer>
//           </nav>
//         </Col>

//         <Col xs lg="3">
//           <p className="pages-title-secondary mb-1">Talk to us</p>
         
//             <li><Nav.Link href="mailto:lexaviva.edu@gmail.com">
//               <FaEnvelope /> lexaviva.edu@gmail.com
//             </Nav.Link>
//             <li><Nav.Link href="https://x.com/lexaviva">
//               <FaTwitter /> Twitter
//             </Nav.Link>
         
//         </Col>
      
        
//         <Col xs lg="3">
//           <p className="pages-title-secondary mb-1">Image Credits</p>
          
//             <li><Nav.Link>Hero image by Storyset on <a href="https://freepik.com">Freepik.com</a></Nav.Link>
//             <li><Nav.Link>Info cards images by <a href="https://undraw.co">Undraw</a></Nav.Link>   
          
//         </Col>
//       </Row>
//       <Row className="developer-info justify-content-center mb-2 mx-0">
//       <Col xs="12" md="auto" className="text-center">
//           <span>Jose Lopez (CobiDev) © 2024</span>
//         <a href="mailto:jose.lopez.cobano@gmail.com" className="mx-2 "><FaEnvelope /></a> 
//         <a href="https://github.com/josecobi" className="mx-2"><FaGithub /></a> 
//         <a href="https://www.linkedin.com/in/josecobi/" className="mx-2"><FaLinkedin /></a>
//         </Col>
//       </Row>
  
//     </Footer>
//   );
// }

// export default Footer;


// function Footer() {
//   return (
//     <div className="page-footer">
//       <span>Jose Lopez (CobiDev) © 2024</span>
//       <br />
//       <a href="https://github.com/josecobi">GitHub</a> | 
//       <a href="https://www.linkedin.com/in/josecobi/"> LinkedIn</a> | 
//       <a href="mailto:jose.lopez.cobano@gmail.com"> Email</a>
//       <br />
//       <span>Powered by React, Node.js, Express, MongoDB and Redux</span>
//     </div>
//   );
// }

// export default Footer;











////////////////////////////////////////////////////////////////////////////////////////////////////
function Footer() {
  return (
    <footer className="page-footer smaller-text mt-5">
      <Container>
      <Row className="mx-0 mt-3 g-2">
      <Col xs lg="3" className="align-self-center">
           <img
            alt="LexaViva Logo"
            src="/assets/brand.svg"
            width="120"
            height="30"
            className="mb-2"
          />
        </Col>
        <Col xs lg="3">
        <p className="pages-title-secondary mb-1">Navigation</p>
        
            <ul className="footer-link-list">

            <li><LinkContainer to="/" className="nav-link-inline">
            <Nav.Link>Home</Nav.Link></LinkContainer></li>
          
                      
            <li><LinkContainer to="/dashboard" className="nav-link-inline"><Nav.Link>Dashboard</Nav.Link></LinkContainer></li>
          
          
            <li><LinkContainer to="/study" className="nav-link-inline"><Nav.Link>Study</Nav.Link></LinkContainer></li>
          
          
            <li><LinkContainer to="/mytopics" className="nav-link-inline"><Nav.Link>My Topics</Nav.Link></LinkContainer></li>
          
          
            <li><LinkContainer to="/profile" className="nav-link-inline"><Nav.Link>Profile</Nav.Link></LinkContainer></li>
          
          
            <li><LinkContainer to="/About" className="nav-link-inline"><Nav.Link>About</Nav.Link></LinkContainer></li>
          
            </ul>
      
        </Col>
        <Col>
        <p className="pages-title-secondary mb-1">Talk to us</p>
       <ul className="footer-link-list">  
       <li><a href="mailto:lexaviva.edu@gmail.com">
         <FaEnvelope /> lexaviva.edu@gmail.com
       </a></li>
       <li><a href="https://x.com/lexaviva">
         <FaTwitter /> Twitter
       </a></li>
       </ul>
        </Col>
        <Col xs lg="3"> 
        <p className="pages-title-secondary mb-1">Image Credits</p>
       <li>Hero image by Storyset on <a href="https://freepik.com">Freepik.com</a></li>
        <li>Info cards images by <a href="https://undraw.co">Undraw</a></li> 
        
        </Col>
      </Row>
      <Row className="mx-0 my-2 developer-info">
        <Col className="text-center">
    <span>Jose Lopez (CobiDev) © 2024</span>
       <a href="mailto:jose.lopez.cobano@gmail.com" className="mx-2 "><FaEnvelope /></a> 
       <a href="https://github.com/josecobi" className="mx-2"><FaGithub /></a> 
       <a href="https://www.linkedin.com/in/joselopezcobano/" className="mx-2"><FaLinkedin /></a>
       </Col>
       </Row>
       </Container>
    </footer>
  );
}

export default Footer;
