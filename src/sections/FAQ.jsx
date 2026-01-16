const FAQS = [
  {
    q: "¿Es este un producto real?",
    a: "Es un proyecto de portafolio diseñado para verse y sentirse como una landing page SaaS real. El objetivo es una UI limpia, buena estructura y código sólido.",
  },
  {
    q: "¿Puedo reutilizar esta estructura?",
    a: "Sí. La estructura de layout/secciones es excelente para landing pages, dashboards y aplicaciones pequeñas. Puedes añadir routing luego si lo necesitas.",
  },
  {
    q: "¿Funciona en móviles?",
    a: "Sí. Utiliza el sistema de grilla de Bootstrap y utilidades responsivas. El diseño se adapta correctamente y mantiene un espaciado cómodo en cualquier dispositivo.",
  },
  {
    q: "¿Cómo manejas la accesibilidad?",
    a: "Bootstrap proporciona buenos valores por defecto y mantenemos HTML semántico, contraste legible y componentes amigables con el teclado (como este acordeón).",
  },
  {
    q: "¿Dónde se desplegará esto?",
    a: "Una vez terminado el MVP, se puede desplegar en Vercel/Netlify fácilmente y añadir el enlace demo al README y sección About de GitHub.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-5 bg-dark">
      <div className="container py-5">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <h2 className="fw-bold display-6 mb-3">Preguntas Frecuentes</h2>
            <p className="text-secondary lead">
              Respuestas rápidas sobre este proyecto y cómo está construido.
            </p>
            <a href="#contact" className="btn btn-outline-light mt-3">
              ¿Tienes más dudas?
            </a>
          </div>

          <div className="col-lg-7">
            <div className="accordion accordion-flush" id="faqAccordion">
              {FAQS.map((item, idx) => {
                const headingId = `faqHeading${idx}`;
                const collapseId = `faqCollapse${idx}`;
                const isFirst = idx === 0;

                return (
                  <div className="accordion-item bg-transparent border-bottom border-secondary" key={item.q}>
                    <h3 className="accordion-header" id={headingId}>
                      <button
                        className={["accordion-button", !isFirst && "collapsed", "bg-transparent text-white fw-medium py-4 shadow-none"].filter(Boolean).join(" ")}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isFirst ? "true" : "false"}
                        aria-controls={collapseId}
                      >
                        {item.q}
                      </button>
                    </h3>

                    <div
                      id={collapseId}
                      className={["accordion-collapse collapse", isFirst && "show"].filter(Boolean).join(" ")}
                      aria-labelledby={headingId}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-secondary pb-4 pt-0">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
