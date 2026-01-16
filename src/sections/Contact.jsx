import { useMemo, useState } from "react";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState({ sending: false, sent: false });

  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = "Name is required.";
    if (!values.email.trim()) e.email = "Email is required.";
    else if (!isValidEmail(values.email)) e.email = "Please enter a valid email.";
    if (!values.message.trim()) e.message = "Message is required.";
    return e;
  }, [values]);

  const hasErrors = Object.keys(errors).length > 0;

  function handleChange(ev) {
    const { name, value } = ev.target;
    setValues((v) => ({ ...v, [name]: value }));
    setStatus({ sending: false, sent: false });
  }

  function handleBlur(ev) {
    const { name } = ev.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }

  async function handleSubmit(ev) {
    ev.preventDefault();

    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;

    setStatus({ sending: true, sent: false });

    // Simulación de envío (sin backend)
    await new Promise((r) => setTimeout(r, 800));

    setStatus({ sending: false, sent: true });
    setValues({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
  }

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <h2 className="fw-bold">Contact</h2>
            <p className="text-secondary mb-0">
              Send a message. This form validates input and simulates an async submit.
            </p>

            <div className="mt-4 p-4 rounded-4 border border-secondary bg-dark">
              <div className="fw-semibold">What you’ll get</div>
              <ul className="text-secondary mb-0 mt-2">
                <li>Clear UI & responsive layout</li>
                <li>Clean structure and reusable components</li>
                <li>Portfolio-ready code</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="p-4 p-md-5 rounded-4 border border-secondary bg-dark">
              {status.sent && (
                <div className="alert alert-success" role="alert">
                  ✅ Message sent! (simulated)
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your name"
                  />
                  {touched.name && errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@email.com"
                  />
                  {touched.email && errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`form-control ${touched.message && errors.message ? "is-invalid" : ""}`}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me what you're building..."
                  />
                  {touched.message && errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={status.sending}
                >
                  {status.sending ? "Sending..." : "Send message"}
                </button>

                <p className="text-secondary small mt-3 mb-0">
                  This is a demo form (no backend). It shows validation and async UX.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
