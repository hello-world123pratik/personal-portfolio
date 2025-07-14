import resumeFile from "../assets/Pratik Pramod Shirsath_Full Stack Developer.pdf";

const formAction = import.meta.env.VITE_FORMSPREE_URL;

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact-title">Hire Me</h2>
        <p className="contact-subtitle">
          I’m actively looking for full-time opportunities in full-stack, backend, or product engineering roles.
          Recruiters and hiring managers can reach out using the form below or through my contact details.
        </p>

        <div className="contact-grid">
          {/* Formspree-connected Contact Form */}
          <form className="contact-form" action={formAction} method="POST">
            <div className="form-group">
              <input type="text" name="name" required placeholder=" " />
              <label>Your Name</label>
            </div>

            <div className="form-group">
              <input type="email" name="email" required placeholder=" " />
              <label>Your Email</label>
            </div>

            <div className="form-group">
              <textarea name="message" rows="5" required placeholder=" "></textarea>
              <label>Message / Requirements</label>
            </div>

            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>

          {/* Direct Contact Info */}
          <div className="contact-info">
            <div className="contact-card">
              <h4> Email</h4>
              <a href="mailto:pratikshirsath45@gmail.com">
                pratikshirsath45@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <h4> Phone</h4>
              <a href="tel:+918177850079">+91 8177850079</a>
            </div>

            <div className="contact-card">
              <h4> Resume</h4>
              <a href={resumeFile} target="_blank" rel="noopener noreferrer">
                View Resume (PDF)
              </a>
              <br />
              <a href={resumeFile} download>
                 Download Resume
              </a>
            </div>

            <div className="contact-card">
              <h4> LinkedIn</h4>
              <a
                href="https://linkedin.com/in/pratik-shirsath-6524aa284"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/pratik-shirsath-6524aa284
              </a>
            </div>

            <div className="contact-card">
              <h4> GitHub</h4>
              <a
                href="https://github.com/hello-world123pratik"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/hello-world123pratik
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
