export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-3">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          SaaSBrand
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
          </ul>

          <div className="d-flex ms-lg-3 mt-3 mt-lg-0 gap-2">
            <a className="btn btn-outline-light" href="#contact">Contact</a>
            <a className="btn btn-primary" href="#pricing">Get started</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
