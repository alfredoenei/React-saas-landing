import { useState } from 'react';

export default function Hero() {
  // Acá manejamos el estado de nuestra lista de tareas.
  // Usamos useState para que la UI reaccione cuando el usuario hace click.
  const [steps, setSteps] = useState([
    { id: 1, text: "Comprender tu visión y necesidades reales 🧠", completed: false },
    { id: 2, text: "Diseñar una estrategia escalable 📐", completed: false },
    { id: 3, text: "Desarrollo limpio y comunicación constante 🤝", completed: false },
    { id: 4, text: "Lanzamiento y soporte continuo 🚀", completed: false },
  ]);

  // Esta función es la que cambia el estado.
  // Recorremos el array y si encontramos el ID que clickeaste, le invertimos el valor.
  // Inmutabilidad, creamos un nuevo array, no modificamos el viejo.
  const toggleStep = (id) => {
    setSteps(steps.map(step =>
      step.id === id ? { ...step, completed: !step.completed } : step
    ));
  };

  return (
    <section className="py-5 mt-5">
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="d-inline-block px-3 py-1 mb-3 border border-secondary rounded-pill bg-dark bg-opacity-50">
              <span className="small text-primary fw-bold text-uppercase tracking-wider">Disponible para Proyectos</span>
            </div>
            <h1 className="display-4 fw-bold mb-3 text-white lh-base">
              Desarrollo Web <span className="text-gradient">Premium & Escalable</span> para tu negocio
            </h1>
            <p className="lead text-secondary mb-4">
              Especialista en <strong>React Moderno</strong> y Arquitectura de Software. Construyo aplicaciones rápidas,
              seguras y fáciles de mantener que convierten visitantes en clientes.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a className="btn btn-primary btn-lg px-4" href="#pricing">Ver planes</a>
              <a className="btn btn-outline-light btn-lg px-4" href="#features">
                <i className="bi bi-code-slash me-2"></i>Ver código
              </a>
            </div>

            <div className="mt-5 pt-2 d-flex align-items-center justify-content-center justify-content-lg-start gap-4 opacity-75 grayscale-hover">
              <small className="text-muted fw-semibold">STACK UTILIZADO:</small>
              <span className="text-secondary fw-bold">REACT 19</span>
              <span className="text-secondary fw-bold">BOOTSTRAP</span>
              <span className="text-secondary fw-bold">VITE</span>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="position-relative">
              {/* Decorative glow background */}
              <div className="position-absolute top-50 start-50 translate-middle bg-primary opacity-25 rounded-circle blur-3xl"
                style={{ width: '300px', height: '300px', filter: 'blur(80px)', zIndex: -1 }}></div>

              <div className="p-4 rounded-4 border border-secondary bg-surface shadow-2xl position-relative overflow-hidden">
                <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4">
                  <div className="d-flex gap-2">
                    <div className="bg-danger rounded-circle" style={{ width: 10, height: 10 }}></div>
                    <div className="bg-warning rounded-circle" style={{ width: 10, height: 10 }}></div>
                    <div className="bg-success rounded-circle" style={{ width: 10, height: 10 }}></div>
                  </div>
                  <div className="text-secondary small font-monospace opacity-50">colaboración_transparente.jsx</div>
                </div>

                {/* Task list interactivo */}
                <div className="d-flex flex-column gap-3">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      onClick={() => toggleStep(step.id)}
                      className={`d-flex align-items-center gap-3 p-3 rounded-3 border transition-all cursor-pointer user-select-none
                          ${step.completed
                          ? 'bg-primary border-primary shadow-lg scale-100'
                          : 'bg-surface border-secondary hover-bg-surface-light hover-border-white'
                        }`}
                      style={{
                        cursor: 'pointer',
                        backgroundColor: step.completed ? 'rgba(99, 102, 241, 0.25)' : '' /* Fallback/Override for opacity */
                      }}
                    >
                      <div className={`d-flex align-items-center justify-content-center rounded-circle border flex-shrink-0 transition-all
                            ${step.completed ? 'bg-primary border-primary text-white shadow-md' : 'border-secondary text-secondary bg-dark'}`}
                        style={{ width: 28, height: 28 }}
                      >
                        <i className={`bi bi-check-lg fw-bold ${step.completed ? 'd-block' : 'd-none'}`}></i>
                      </div>
                      <span className={`fw-bold transition-all fs-6 ${step.completed ? 'text-white' : 'text-light opacity-75'}`}>
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25 text-center">
                  <small className="text-muted fst-italic">Hacer click para marcar progreso</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
