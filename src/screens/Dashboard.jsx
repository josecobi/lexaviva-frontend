import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function Dasboard() {
    return (
        <>
           <LinkContainer to='/'>  
              <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/study'>
              <Nav.Link>Study</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/mytopics'>
              <Nav.Link>My Topics</Nav.Link>
              </LinkContainer>

        </>
    );
}

export default Dasboard;