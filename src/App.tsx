const services = [
  {
    title: 'Business Strategy',
    description: 'Align goals, priorities, and execution plans for sustainable growth.',
  },
  {
    title: 'Operational Excellence',
    description: 'Streamline workflows and improve performance across core functions.',
  },
  {
    title: 'Digital Enablement',
    description: 'Adopt practical technology solutions that improve visibility and delivery.',
  },
];

const values = [
  ['Outcome-driven', 'Every engagement is focused on clear, usable results.'],
  ['Collaborative', 'We work closely with teams to build confidence and momentum.'],
  ['Reliable', 'We value consistent delivery, transparent communication, and trust.'],
];

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top">aetorel group</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content" id="top">
          <p className="eyebrow">Trusted business solutions</p>
          <h1>Helping businesses grow with clarity, speed, and confidence.</h1>
          <p className="hero-text">
            aetorel group partners with ambitious companies to improve operations,
            strengthen strategy, and deliver practical digital transformation.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Start a conversation</a>
            <a className="button secondary" href="#services">Explore services</a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About us</p>
            <h2>Built around long-term value.</h2>
          </div>
          <div className="grid two-column">
            <p>We combine business insight, delivery discipline, and modern tooling to help organizations move from ideas to measurable outcomes.</p>
            <p>From process improvement to execution support, aetorel group focuses on dependable partnerships that make change practical and sustainable.</p>
          </div>
        </section>

        <section className="section muted" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Support where it matters most.</h2>
          </div>
          <div className="grid cards">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Why aetorel group</p>
            <h2>A partner that keeps progress practical.</h2>
          </div>
          <div className="grid cards">
            {values.map(([title, description]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build what&apos;s next together.</h2>
        </div>
        <a className="button primary" href="mailto:hello@aetorelgroup.com">hello@aetorelgroup.com</a>
      </footer>
    </div>
  );
}
