const FEATURES = [
  {
    title: "Fast setup",
    text: "Start quickly with a clean structure: layout, UI components, and sections.",
    icon: "⚡",
  },
  {
    title: "Responsive by default",
    text: "Mobile-first layout with Bootstrap grid and sensible spacing.",
    icon: "📱",
  },
  {
    title: "Reusable components",
    text: "UI pieces you can reuse across sections to keep things consistent.",
    icon: "🧩",
  },
  {
    title: "Accessible basics",
    text: "Good defaults for semantic HTML, focus states, and readable contrast.",
    icon: "✅",
  },
  {
    title: "Easy deploy",
    text: "Deploy in minutes with Vercel/Netlify and share a clean demo link.",
    icon: "🚀",
  },
  {
    title: "Portfolio-ready",
    text: "Readable code, clear commits, and a project that tells a story.",
    icon: "💼",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-5">
      <div className="container py-5">
        <div className="row align-items-end mb-4 g-3">
          <div className="col-lg-7">
            <h2 className="fw-bold">Features that make it feel real</h2>
            <p className="text-secondary mb-0">
              A clean and modern landing built with React + Bootstrap, designed to look professional in a portfolio.
            </p>
          </div>
          <div className="col-lg-5 text-lg-end">
            <a className="btn btn-outline-light" href="#pricing">
              See pricing
            </a>
          </div>
        </div>

        <div className="row g-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="col-12 col-md-6 col-lg-4">
              <div className="h-100 p-4 rounded-4 border border-secondary bg-dark">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 border border-secondary"
                    style={{ width: 44, height: 44 }}
                    aria-hidden="true"
                  >
                    <span style={{ fontSize: 20 }}>{f.icon}</span>
                  </div>
                  <h3 className="h5 mb-0">{f.title}</h3>
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
