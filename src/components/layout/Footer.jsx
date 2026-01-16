export default function Footer() {
  return (
    <footer className="py-5 border-top border-secondary">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <div className="fw-bold">SaaSBrand</div>
          <div className="text-secondary">© {new Date().getFullYear()} All rights reserved.</div>
        </div>

        <div className="d-flex gap-3">
          <a className="text-secondary text-decoration-none" href="#features">Features</a>
          <a className="text-secondary text-decoration-none" href="#pricing">Pricing</a>
          <a className="text-secondary text-decoration-none" href="#faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
