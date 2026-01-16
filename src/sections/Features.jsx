const FEATURES = [
  {
    title: "Arquitectura Escalable",
    text: "Diseño modular y desacoplado listo para crecer. Evita la deuda técnica desde el primer commit.",
    icon: "bi-diagram-3-fill",
    color: "text-warning"
  },
  {
    title: "Responsive & Mobile First",
    text: "Experiencia de usuario fluida en cualquier dispositivo, optimizada con grillas modernas y CSS robusto.",
    icon: "bi-phone-fill",
    color: "text-info"
  },
  {
    title: "Sistemas de Diseño",
    text: "Implementación de tokens y componentes atómicos para una consistencia visual impecable y fácil mantenimiento.",
    icon: "bi-palette-fill",
    color: "text-primary"
  },
  {
    title: "Rendimiento y SEO",
    text: "Mejores prácticas de Web Vitals, carga diferida y semántica HTML para máxima visibilidad y velocidad.",
    icon: "bi-speedometer2",
    color: "text-success"
  },
  {
    title: "CI/CD & DevOps Ready",
    text: "Flujos de trabajo automatizados para despliegues seguros y rápidos en plataformas modernas como Vercel.",
    icon: "bi-rocket-fill",
    color: "text-danger"
  },
  {
    title: "Código Documentado",
    text: "Transparencia total. Código limpio, tipado y comentado para facilitar la colaboración en equipo.",
    icon: "bi-code-square",
    color: "text-secondary"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-5 position-relative overflow-hidden">
      {/* Background Decor */}
      <div className="position-absolute start-0 top-0 translate-middle rounded-circle bg-primary opacity-10 blur-3xl" style={{ width: 500, height: 500, filter: 'blur(100px)', zIndex: -1 }}></div>

      <div className="container py-5">
        <div className="row align-items-end mb-5 g-3">
          <div className="col-lg-7">
            <h2 className="fw-bold display-6 mb-2">Ingeniería que genera <span className="text-primary">confianza</span></h2>
            <p className="text-secondary lead mb-0">
              No solo es "hacer que funcione". Es construir software robusto, mantenible y orientado a resultados de negocio.
            </p>
          </div>
          <div className="col-lg-5 text-lg-end">
            {/* Secondary Action */}
          </div>
        </div>

        <div className="row g-4">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="col-12 col-md-6 col-lg-4">
              <div className="h-100 p-4 rounded-4 border border-secondary bg-dark bg-opacity-50 hover-lift transition-all group">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 bg-opacity-10 bg-white border border-secondary"
                    style={{ width: 48, height: 48 }}
                  >
                    <i className={`bi ${f.icon} ${f.color} fs-4`}></i>
                  </div>
                  <h3 className="h5 mb-0 fw-bold">{f.title}</h3>
                </div>

                <p className="text-secondary mb-0">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
