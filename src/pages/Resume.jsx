import resumeFile from '../assets/Pratik Pramod Shirsath_Full Stack Developer.pdf';

export default function Resume() {
  return (
    <section className="resume">
      <div className="container">
        <h2>Resume</h2>
        <p>You can view or download my resume below.</p>

        <div className="btn-group">
          <a
            className="btn"
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>

          <a
            className="btn"
            href={resumeFile}
            download
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
