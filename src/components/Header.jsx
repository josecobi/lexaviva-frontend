import { Nav, Navbar, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import { removeCredentials } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function Header() {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [removeCredentialsApiCall] = useLogoutMutation();
  const logoutHandler = () => {
    try{
        removeCredentialsApiCall().unwrap();
        dispatch(removeCredentials());
        navigate('/login');
    }catch(error){
      console.log(error);
      toast.error("An error occurred. Please try again");
    }}

  return (
    <header>
      <Navbar className="border-bottom" variant='dark' expand='lg' collapseOnSelect >
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>
          <img
              alt=""
              src="/assets/brand.svg"
              width="120"
              height="30"
              className="d-inline-block align-top"
            />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
            </Nav>
            <Nav>
              {!userInfo ? (
              <><LinkContainer to='/login'>
              <Nav.Link >
                <FaSignInAlt /> Login
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/register'>
              <Nav.Link>
                <FaSignOutAlt /> Sign Up
              </Nav.Link>
              </LinkContainer>
              </>) : (
                <>
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer >
                  <LinkContainer to='/dashboard'>
                  <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/logout'>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                </>
              ) }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;