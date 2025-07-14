import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
