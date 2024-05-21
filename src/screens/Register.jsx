import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useRegisterMutation } from "../slices/usersApiSlice";
import toast from 'react-hot-toast';
import Loader from '../Loader';
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
  const [register, { isLoading }] = useRegisterMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error("Passwords do not match");
      return;
    }else{  
      try{
        const response = await register({name, email, password}).unwrap();
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

}// import {useState} from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate }  from 'react-router-dom';


// function Register() {
  
//   const navigate = useNavigate();
//   const [userRegistrationData, setUserRegistrationData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const registerUser = async (event) => {
//       event.preventDefault();
//       const {name, email, password} = userRegistrationData;
//       console.log("name: ", name, "email: ", email, "password: ", password);

//       try{
//           const {data} = await axios.post("http://localhost:5050/api/users", {name, email, password});

//           if(data.error){
//             toast.error(data.error);
//           }
//           else{
//             setUserRegistrationData({name: data.name, email: data.email, password: data.password});
//             toast.success("User registered successfully");
//             navigate("/login");
//           }
//       }
//       catch(e){
//         console.error(e);
//         toast.error("An error occurred");
//       }


//   }

//     return (
//       <form onSubmit={registerUser} className="container p-5 col-4 bg-secondary-subtle text-dark rounded mt-5">
//         <h2 className="container d-flex justify-content-center mt-5">This section is under maintenance. It will be available soon.</h2>        
//         <label htmlFor="inputEmail" className="form-label" required placeholder="name">Name</label>
//         <input type="text" id="inputName" className="form-control" value={userRegistrationData.name} onChange={(e) => setUserRegistrationData({...userRegistrationData, name: e.target.value}) }/>
//         <label htmlFor="inputEmail" className="form-label" required placeholder="youremail@example.com" >Email</label>
//         <input type="email" id="inputEmail" className="form-control" value={userRegistrationData.email} onChange={(e) => setUserRegistrationData({...userRegistrationData, email: e.target.value})} />
//         <label htmlFor="inputPassword5" className="form-label pt-3">Password</label>
//         <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" value={userRegistrationData.password} onChange={(e) => setUserRegistrationData({...userRegistrationData, password: e.target.value})} />
//         <div className="container d-flex justify-content-center">
//         <button type="submit" className="btn btn-success mt-3 col-4 ">Sign-up</button>
//         </div>
//       </form>
//     )
// }
  
  export default Register;