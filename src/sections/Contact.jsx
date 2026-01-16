import { useMemo, useState } from "react";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function Contact() {
  // Manejo de estado para el formulario. 
  // Separamos los valores, si el usuario ya tocó el campo (touched) y el estado del envío (status).
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState({ sending: false, sent: false });

  // useMemo es clave acá: solo recalculamos los errores si cambian los valores.
  // Si validáramos en cada render sin control, podríamos afectar el rendimiento en forms grandes.
  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = "El nombre es requerido.";
    if (!values.email.trim()) e.email = "El email es requerido.";
    else if (!isValidEmail(values.email)) e.email = "Por favor ingresa un email válido.";
    if (!values.message.trim()) e.message = "El mensaje es requerido.";
    return e;
  }, [values]);

  // Si el objeto de errores tiene claves, es que algo falta
  const hasErrors = Object.keys(errors).length > 0;

  function handleChange(ev) {
    const { name, value } = ev.target;
    setValues((v) => ({ ...v, [name]: value }));
    // Si el usuario empieza a escribir de nuevo, reseteamos el estado de "enviado".
    setStatus({ sending: false, sent: false });
  }

  function handleBlur(ev) {
    // Marcamos el campo como "tocado" cuando el usuario sale de él.
    // Así no le mostramos errores molestos antes de que termine de escribir.
    const { name } = ev.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }

  async function handleSubmit(ev) {
    ev.preventDefault();

    // Al intentar enviar, marcamos todo como tocado para que salten los errores si los hay.
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;

    setStatus({ sending: true, sent: false });

    // Simulamos una llamada asíncrona a un backend (API).
    // Usamos un setTimeout para imitar el "loading" de la vida real.
    await new Promise((r) => setTimeout(r, 800));

    setStatus({ sending: false, sent: true });
    // Limpiamos el form para que quede listo para otra consulta.
    setValues({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
  }

  return (
    <section id="contact" className="py-5 position-relative overflow-hidden">
      {/* Glow effect */}
      <div className="position-absolute end-0 bottom-0 translate-middle rounded-circle bg-primary opacity-10 blur-3xl" style={{ width: 400, height: 400, filter: 'blur(80px)', zIndex: -1 }}></div>

      <div className="container py-5">
        <div className="row g-5 align-items-stretch">
          <div className="col-lg-5">
            <h2 className="fw-bold display-6 mb-3">Contáctanos</h2>
            <p className="text-secondary lead mb-4">
              ¿Tienes algún proyecto en mente o simplemente quieres saludar? Completa el formulario a continuación.
            </p>

            <div className="mt-4 p-4 rounded-4 border border-secondary bg-dark bg-opacity-50">
              <div className="fw-semibold mb-3 text-white">¿Por qué contactarnos?</div>
              <ul className="text-secondary mb-0 ps-3 vstack gap-2">
                <li>Discutir oportunidades de colaboración</li>
                <li>Consultoría sobre desarrollo React</li>
                <li>Feedback sobre este portafolio</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="h-100 p-4 p-md-5 rounded-4 border border-secondary bg-surface shadow-lg">
              {status.sent && (
                <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
                  <i className="bi bi-check-circle-fill"></i>
                  ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <label className="form-label text-sm fw-medium text-secondary" htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    className={`form-control form-control-lg bg-dark border-secondary text-white focus-primary ${touched.name && errors.name ? "is-invalid" : ""}`}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tu nombre"
                  />
                  {touched.name && errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label text-sm fw-medium text-secondary" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control form-control-lg bg-dark border-secondary text-white focus-primary ${touched.email && errors.email ? "is-invalid" : ""}`}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="tucorreo@ejemplo.com"
                  />
                  {touched.email && errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label text-sm fw-medium text-secondary" htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`form-control form-control-lg bg-dark border-secondary text-white focus-primary ${touched.message && errors.message ? "is-invalid" : ""}`}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                  {touched.message && errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 fw-bold"
                  disabled={status.sending}
                >
                  {status.sending ? (
                    <span><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Enviando...</span>
                  ) : "Enviar Mensaje"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
