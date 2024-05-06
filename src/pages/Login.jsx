import {useState} from 'react';
import axios from 'axios';

function Login() {
  const [loginUserData, setLoginUserData] = useState({
    email: "", 
    password: "",
  })

  const loginUser = (event) => {
    event.preventDefault()
    axios.get("http://localhost:5050/auth")


    // console.log("email: ", email, "password: ", password)
  }

  return (
    <form onSubmit={loginUser} className="container p-5 col-4 bg-secondary-subtle text-dark rounded mt-5">
    <h2 className="container d-flex justify-content-center mt-5">This section is under maintenance. It will be available soon.</h2>

    <label htmlFor="inputEmail" className="form-label" required placeholder="youremail@example.com" >Email</label>
    <input type="email" id="inputEmail" className="form-control" value={loginUserData.email} onChange={(e) => setLoginUserData({...loginUserData, email: e.target.value})}/>
    <label htmlFor="inputPassword5" className="form-label pt-3">Password</label>
    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" value={loginUserData.password} onChange={(e) => setLoginUserData({...loginUserData, password: e.target.value})}/>
    <div id="passwordHelpBlock" className="form-text text-dark">
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
    </div>
    <div className="container d-flex justify-content-center">
    <button type="submit" className="btn btn-success mt-3 col-4 ">Login</button>
    </div>
    </form>
  )
}

export default Login