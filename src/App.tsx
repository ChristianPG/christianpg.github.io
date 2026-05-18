import profileImage from "/assets/images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProjectsModule from "@/modules/Projects/Projects";

import "./App.css";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

function App() {
  return (
    <>
      <header>
        <ThemeSwitch />
      </header>
      <main className="mainContent">
        <div className="profileLayout">
          <div className="profileSummary">
            <h1>Christian Patiño</h1>
            <h2>
              <i>Senior Software Engineer</i>
            </h2>
            <p>
              Software engineer with 10+ years of experience as a full stack
              developer, specializing in frontend development with React,
              TypeScript, and scalable UI architectures, complemented by backend
              expertise in Node.js. Proven track record of improving system
              performance and leading successful projects from concept to
              delivery. Strong collaborator in cross-functional teams, with a
              focus on building high-quality, maintainable solutions and
              continuously expanding technical expertise.
            </p>
          </div>
          <img
            src={profileImage}
            className="profilePhoto"
            alt="Christian's photo"
          />
        </div>
        <ProjectsModule />
      </main>
      <footer className="mainFooter">
        <a
          href="https://www.linkedin.com/in/christianpg"
          target="_blank"
          title="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href="https://github.com/ChristianPG" target="_blank" title="Github">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
      </footer>
    </>
  );
}

export default App;
