import profileImage from "/assets/images/profile.png";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <header className="mainHeader">
        <div>
          <img
            src={profileImage}
            className="profilePhoto"
            alt="Christian's photo"
          />
        </div>
        <h1>Christian Patiño</h1>
        <h2>Senior Software Engineer</h2>
      </header>
      <main className="mainSection">
        <p>
          Software engineer with 10+ years of experience as a full stack
          developer, specializing in frontend development with React,
          TypeScript, and scalable UI architectures, complemented by backend
          expertise in Node.js. Proven track record of improving system
          performance and leading successful projects from concept to delivery.
          Strong collaborator in cross-functional teams, with a focus on
          building high-quality, maintainable solutions and continuously
          expanding technical expertise.
        </p>
        <h3>WIP</h3>
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
