import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <h1 className="logo">Pratik<span className="highlight">Shirsath</span></h1>

        <nav className="nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink to="/resume" className="nav-link">
            Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
