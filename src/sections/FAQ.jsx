const FAQS = [
  {
    q: "Is this a real product?",
    a: "It’s a portfolio project designed to look and feel like a real SaaS landing. The goal is clean UI, good structure, and solid code.",
  },
  {
    q: "Can I reuse this structure for other projects?",
    a: "Yes. The layout/sections structure is great for landing pages, dashboards, and small apps. You can add routing later if needed.",
  },
  {
    q: "Does it work on mobile?",
    a: "Yes. It uses Bootstrap’s grid system and responsive utilities. The layout stacks correctly and keeps comfortable spacing.",
  },
  {
    q: "How do you handle accessibility?",
    a: "Bootstrap provides good defaults and we keep semantic HTML, readable contrast, and keyboard-friendly components (like this accordion).",
  },
  {
    q: "Where will this be deployed?",
    a: "Once the MVP is done, we’ll deploy to Vercel/Netlify and add the live demo link to the README and GitHub repo About section.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-5">
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <h2 className="fw-bold">Frequently asked questions</h2>
            <p className="text-secondary mb-0">
              Quick answers about this project and how it’s built.
            </p>
          </div>

          <div className="col-lg-7">
            <div className="accordion" id="faqAccordion">
              {FAQS.map((item, idx) => {
                const headingId = `faqHeading${idx}`;
                const collapseId = `faqCollapse${idx}`;
                const isFirst = idx === 0;

                return (
                  <div className="accordion-item bg-dark border border-secondary" key={item.q}>
                    <h3 className="accordion-header" id={headingId}>
                      <button
                        className={["accordion-button", !isFirst && "collapsed", "bg-dark text-white"].filter(Boolean).join(" ")}
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
                      <div className="accordion-body text-secondary">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-secondary mt-3 mb-0">
              Still have questions? <a className="link-light" href="#contact">Contact us</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
