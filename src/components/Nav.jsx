function Nav() {
  //
  return (
    <div>
        {/* <nav className="navbar navbar-expand-lg" data-bs-theme="dark"> */}
        <nav className="navbar navbar-expand-lg bg-body-primary-subtle border-bottom" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand mb-0 h1" href="/">LexaViva</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation"> */}
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse --bs-light-text-emphasis" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/study">Study</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/MyTopics">My Topics</a>
          </li>             
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/login">Login</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" href="/register">Sign Up</a>
            </li>
          </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Nav