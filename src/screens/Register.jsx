import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/global/FormContainer";
import { useRegisterMutation } from "../slices/usersApiSlice";
import toast from 'react-hot-toast';
import Loader from '../components/global/Loader';
import { setCredentials } from "../slices/authSlice";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.auth);

   // UseEffect hook to check if userInfo is available in the state. If it is, redirect to the dashboard page.
   useEffect(() => { 
    if(userInfo) {
      
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);
  // Use the useRegisterMutation hook to register a new user
  const [register, { isLoading }] = useRegisterMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error("Passwords do not match");
      return;
    }else{  
      try{
        const response = await register({name, email, password}).unwrap(); //unrwap to access successful payload or error message after a mutation
        dispatch(setCredentials({...response}));
        toast.success("Registration successful");
        navigate("/dashboard");
      }catch(err){
        toast.error(err?.data?.message || err.error);
      }
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group className="my-2" controlId="name">
          <Form.Label>Name </Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm Password </Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        {isLoading && <Loader />}
        <Button type="submit" variant="primary" className="mt-3">Sign up</Button>
        <Row className="py-3">
          <Col>
            Already have an account? <Link to={'/login'}>Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )

}
  
export default Register;