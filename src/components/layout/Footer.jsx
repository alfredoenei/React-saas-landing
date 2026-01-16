export default function Footer() {
  return (
    <footer className="py-5 border-top border-secondary bg-darker">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="text-center text-md-start">
          <div className="fw-bold h5 mb-1 text-white d-flex align-items-center justify-content-center justify-content-md-start gap-2">
            <i className="bi bi-hexagon-fill text-primary small"></i>
            Alfredo Enei
          </div>
          <div className="text-secondary small">© {new Date().getFullYear()} Todos los derechos reservados.</div>
        </div>

        <div className="d-flex flex-column flex-md-row bg-dark bg-opacity-50 p-3 rounded-4 gap-4 align-items-center">
          {/* Navigation Links */}
          <div className="d-flex gap-3">
            <a className="text-secondary text-decoration-none hover-white transition-colors small text-uppercase tracking-wider" href="#features">Características</a>
            <a className="text-secondary text-decoration-none hover-white transition-colors small text-uppercase tracking-wider" href="#pricing">Servicios</a>
          </div>

          <div className="vr d-none d-md-block text-secondary opacity-25"></div>

          {/* Social Icons */}
          <div className="d-flex gap-3">
            <a className="text-secondary text-decoration-none hover-white transition-colors fs-5" href="#" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a className="text-secondary text-decoration-none hover-white transition-colors fs-5" href="#" aria-label="Github">
              <i className="bi bi-github"></i>
            </a>
            <a className="text-secondary text-decoration-none hover-white transition-colors fs-5" href="#" aria-label="Email">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
