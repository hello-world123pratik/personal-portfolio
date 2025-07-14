export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className="tech">
        {project.tech.map((t, idx) => <li key={idx}>{t}</li>)}
      </ul>

      <div className="project-links">
        <a
          href={project.live}
          className="btn-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Live Demo
        </a>

        <a
          href={project.github}
          className="btn-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub Code
        </a>
      </div>
    </div>
  );
}
