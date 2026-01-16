const PLANS = [
  {
    name: "Starter",
    price: "€9",
    period: "/mo",
    desc: "For personal projects and learning.",
    features: ["1 project", "Basic analytics", "Email support"],
    cta: "Start Starter",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€19",
    period: "/mo",
    desc: "Best for freelancers and portfolios.",
    features: ["Unlimited projects", "Advanced analytics", "Priority support"],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "€39",
    period: "/mo",
    desc: "For small teams shipping together.",
    features: ["Team workspace", "Roles & permissions", "Slack integration"],
    cta: "Start Team",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Simple pricing</h2>
          <p className="text-secondary mb-0">
            Choose a plan that fits your needs. Upgrade anytime.
          </p>
        </div>

        <div className="row g-3 align-items-stretch">
          {PLANS.map((p) => (
            <div key={p.name} className="col-12 col-md-6 col-lg-4">
              <div
                className={[
                  "h-100 rounded-4 p-4 border",
                  p.highlighted ? "border-primary" : "border-secondary",
                  "bg-dark",
                ].join(" ")}
              >
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h3 className="h5 mb-1">{p.name}</h3>
                    <p className="text-secondary mb-0">{p.desc}</p>
                  </div>

                  {p.highlighted && (
                    <span className="badge text-bg-primary">Most popular</span>
                  )}
                </div>

                <div className="my-4">
                  <span className="display-6 fw-bold">{p.price}</span>
                  <span className="text-secondary ms-1">{p.period}</span>
                </div>

                <ul className="list-unstyled text-secondary mb-4">
                  {p.features.map((f) => (
                    <li key={f} className="d-flex gap-2 mb-2">
                      <span aria-hidden="true">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={[
                    "btn w-100",
                    p.highlighted ? "btn-primary" : "btn-outline-light",
                  ].join(" ")}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary mt-4 mb-0">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
