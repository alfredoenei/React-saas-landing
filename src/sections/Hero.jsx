export default function Hero() {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-secondary mb-2">Modern SaaS landing</p>
            <h1 className="display-5 fw-bold">
              Build a clean portfolio-ready landing with React + Bootstrap
            </h1>
            <p className="text-secondary mt-3">
              A simple but professional structure: layout components + sections + reusable UI.
            </p>

            <div className="d-flex gap-2 mt-4">
              <a className="btn btn-primary btn-lg" href="#pricing">Get started</a>
              <a className="btn btn-outline-light btn-lg" href="#features">See features</a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-5 rounded-4 border border-secondary bg-dark">
              <div className="text-secondary">Placeholder UI card / screenshot</div>
              <div className="mt-3">
                <div className="progress" role="progressbar" aria-label="Demo progress" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className="text-secondary mt-3">Responsive. Clean. Ready for more sections.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
