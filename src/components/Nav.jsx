function Nav() {
  //
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-primary-subtle border-bottom" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand mb-0 h1" href="/">LexaViva</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse --bs-light-text-emphasis" id="navbarNav">
        <ul className="navbar-nav ">
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
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Nav