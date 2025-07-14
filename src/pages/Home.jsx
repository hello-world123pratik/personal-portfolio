export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-text">
              <h1>
                Hi, I'm <span className="highlight">Pratik Shirsath</span>
              </h1>
              <p className="hero-subtitle">
                Full-Stack Developer (MERN & Django) focused on scalable, real-time web apps and clean architecture.
              </p>
              <a href="/projects" className="btn btn-primary">See My Work</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Me</h2>
          <p className="about-description">
            I’m a Computer Science graduate with real-world experience building full-stack applications using technologies like React, Node.js, Django, MongoDB, and MySQL.
            I love solving real problems with clean, scalable solutions.
          </p>

          <h3>Tech Stack</h3>
          <ul className="tech-stack">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Django</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </section>
    </>
  );
}
