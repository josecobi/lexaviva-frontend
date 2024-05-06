import {useState} from 'react';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate }  from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const [userRegistrationData, setUserRegistrationData] = useState({
    username: "",
    email: "",
    password: ""
})

const registerUser = async (event) => {
  event.preventDefault()
  const {username, email, password} = userRegistrationData;
  try{
      const {data} = await axios.post("http://localhost:5050/auth/register", {username, email, password})
      if(data.error){
        toast.error(data.error)
      }
      else{
        setUserRegistrationData({username: data.username, email: data.email, password: data.password})
        toast.success("User registered successfully")
        navigate("/login")
      }
  }
  catch(e){
    console.error(e)
    toast.error("An error occurred")
  }

  // const registerUser = async (event) => {
  //   event.preventDefault()
  //   const {username, email, password} = userRegistrationData;
  //   try{
  //       const {userRegistrationData} = await axios.post("http://localhost:5050/auth/register", {username, email, password})
  //       if(userRegistrationData.error){
  //         toast.error(userRegistrationData.error)
  //       }
  //       else{
  //         setUserRegistrationData({username: data.username, email: data.email, password: data.password})
  //         toast.success("User registered successfully")
  //         navigate("http://localhost:5050/login")
  //       }
  //   }
  //   catch(e){
  //     console.error(e)
  //     toast.error("An error occurred")
  //   }
    // console.log("name: ", name, "email: ", email, "password: ", password)

  }

    return (
      <form onSubmit={registerUser} className="container p-5 col-4 bg-secondary-subtle text-dark rounded mt-5">
        <h2 className="container d-flex justify-content-center mt-5">This section is under maintenance. It will be available soon.</h2>        
        <label htmlFor="inputEmail" className="form-label" required placeholder="name">Name</label>
        <input type="text" id="inputName" className="form-control" value={userRegistrationData.username} onChange={(e) => setUserRegistrationData({...userRegistrationData, username: e.target.value}) }/>
        <label htmlFor="inputEmail" className="form-label" required placeholder="youremail@example.com" >Email</label>
        <input type="email" id="inputEmail" className="form-control" value={userRegistrationData.email} onChange={(e) => setUserRegistrationData({...userRegistrationData, email: e.target.value})} />
        <label htmlFor="inputPassword5" className="form-label pt-3">Password</label>
        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" value={userRegistrationData.password} onChange={(e) => setUserRegistrationData({...userRegistrationData, password: e.target.value})} />
        <div className="container d-flex justify-content-center">
        <button type="submit" className="btn btn-success mt-3 col-4 ">Sign-up</button>
        </div>
      </form>
    )
  }
  
  export default Register;