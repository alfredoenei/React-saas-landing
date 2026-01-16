const PLANS = [
  {
    name: "Desarrollo MVP",
    price: "MVP",
    period: "/sprint",
    desc: "Para startups que necesitan lanzar rápido y validar.",
    features: ["Prototipado rápido en React", "Arquitectura escalable desde el día 1", "Entrega continua (CI/CD)"],
    cta: "Discutir MVP",
    highlighted: false,
  },
  {
    name: "Full Stack Partner",
    price: "Senior",
    period: "/dev",
    desc: "Colaboración a largo plazo para productos maduros.",
    features: ["Desarrollo de features complejas", "Refactorización y Deuda Técnica", "Optimización de rendimiento", "Integración de APIs y Backend"],
    cta: "Ver disponibilidad",
    highlighted: true,
  },
  {
    name: "Consultoría",
    price: "Audit",
    period: "/hora",
    desc: "Asesoría técnica para equipos y empresas.",
    features: ["Revisión de arquitectura", "Mejores prácticas de React", "Mentoria de equipo", "Estrategia de adopción tecnológica"],
    cta: "Agendar sesión",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-5 bg-darker">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">¿Cómo podemos colaborar?</h2>
          <p className="text-secondary lead">
            Adaptabilidad total a las necesidades de tu proyecto o equipo.
          </p>
        </div>

        <div className="row g-4 align-items-center justify-content-center">
          {PLANS.map((p) => (
            <div key={p.name} className={`col-12 col-md-6 col-lg-4 ${p.highlighted ? 'scale-105' : ''}`}>
              <div
                className={[
                  "h-100 rounded-4 p-4 border position-relative transition-all",
                  p.highlighted
                    ? "border-primary bg-dark shadow-lg shadow-primary-subtle"
                    : "border-secondary bg-dark bg-opacity-25",
                ].join(" ")}
                style={p.highlighted ? { zIndex: 10 } : {}}
              >
                {p.highlighted && (
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-primary rounded-pill px-3 py-2 shadow-sm uppercase tracking-wider small">Más Solicitado</span>
                  </div>
                )}

                <div className="text-center mb-4">
                  <h3 className="h5 fw-bold text-secondary text-uppercase tracking-wider small mb-2">{p.name}</h3>
                  <div className="d-flex justify-content-center align-items-baseline">
                    <span className="display-6 fw-bold">{p.price}</span>
                    <span className="text-secondary ms-1 small">{p.period}</span>
                  </div>
                  <p className="text-secondary mt-2 small text-balance">{p.desc}</p>
                </div>

                <hr className="border-secondary opacity-25 my-4" />

                <ul className="list-unstyled text-secondary mb-4 vstack gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="d-flex gap-3 align-items-center">
                      <div className="rounded-circle bg-primary bg-opacity-10 p-1 d-flex justify-content-center align-items-center flex-shrink-0" style={{ width: 20, height: 20 }}>
                        <i className="bi bi-check2 text-primary small"></i>
                      </div>
                      <span className={`small ${p.highlighted ? 'text-primary-light' : ''}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={[
                    "btn w-100 py-2",
                    p.highlighted ? "btn-primary hover-glow" : "btn-outline-light",
                  ].join(" ")}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary mt-5 mb-0 small opacity-75">
          * Disponible para contratos remotos internacionales.
        </p>
      </div>
    </section>
  );
}
