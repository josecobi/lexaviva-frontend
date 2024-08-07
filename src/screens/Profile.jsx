import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/global/FormContainer";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import toast from 'react-hot-toast';
import Loader from '../components/global/Loader';
import { setCredentials } from "../slices/authSlice";


const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {userInfo} = useSelector((state) => state.auth);
  const [updateProfile, {isLoading}] = useUpdateUserMutation();

   // UseEffect hook to check if userInfo is available in the state. 
   useEffect(() => { 
    setName(userInfo.name);
    setEmail(userInfo.email);
   
  }, [userInfo.name, userInfo.email]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error("Passwords do not match");
      return;
    }else{  
       try{
            const response = await updateProfile({_id: userInfo._id, name, email, password}).unwrap();
            dispatch(setCredentials({...response}));
            toast.success("Profile updated successfully");
            navigate("/dashboard");
        } catch(err){
        toast.error(err?.data?.message || err.error);

        }
    }
  }
  return (
    <FormContainer>
      <h1>Update Profile</h1>
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
        <Button type="submit" variant="primary" className="mt-3">Update Profile</Button>
        
      </Form>
    </FormContainer>
  )

}
  
  export default Profile;