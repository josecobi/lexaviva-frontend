function Register() {
    return (
      <form className="container p-5 col-4 bg-secondary-subtle text-dark rounded mt-5">
      <label form="inputEmail" className="form-label" required placeholder="youremail@example.com" >Email</label>
      <input type="email" id="inputEmail" className="form-control" />
      <label form="inputPassword5" className="form-label pt-3">Password</label>
      <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
      <div className="container d-flex justify-content-center">
      <button type="submit" className="btn btn-success mt-3 col-4 ">Sign-up</button>
      </div>
      </form>
    )
  }
  
  export default Register;