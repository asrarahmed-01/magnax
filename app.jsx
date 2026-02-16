const menuItems = ["Home", "About Us", "Services", "Pages", "Blog", "Contact"];

const serviceHighlights = [
  {
    title: "Custom Software Engineering",
    text: "Build cloud-ready web and mobile products tailored to your exact workflows and business goals.",
  },
  {
    title: "Managed IT & DevOps",
    text: "Scale reliably with 24/7 monitoring, automation, and secure infrastructure management.",
  },
  {
    title: "Data & AI Solutions",
    text: "Turn raw data into strategic intelligence with analytics platforms and practical AI integrations.",
  },
];

function Navbar() {
  return (
    <header className="nav-shell">
      <div className="brand-ribbon" aria-hidden="true" />
      <div className="nav-wrap">
        <div className="brand">Magnax</div>
        <nav>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="actions">
          <button className="icon-btn" aria-label="Search">
            🔍
          </button>
          <button className="quote-btn">Get A Quote</button>
          <button className="icon-btn" aria-label="Open menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="overlay" />
      <div className="hero-content">
        <p className="tagline">BEST IT COMPANY</p>
        <h1>Best IT Solution Agency For Your Business</h1>
        <p className="subtitle">
          We design, build, and scale digital products for startups and enterprises with
          agile delivery and measurable impact.
        </p>
        <button className="primary-btn">Let&apos;s Talk With Us</button>
      </div>
      <div className="slider-dots" aria-hidden="true">
        <span>1</span>
        <span>2</span>
        <span className="active">3</span>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading">
        <p>WHAT WE OFFER</p>
        <h2>Software Services Built For Growth</h2>
      </div>
      <div className="card-grid">
        {serviceHighlights.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a href="#">Learn More →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
