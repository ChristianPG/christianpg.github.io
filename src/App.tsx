import profileImage from "/assets/images/profile.png";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <header>
        <div>
          <img
            src={profileImage}
            className="profilePhoto"
            alt="Christian's photo"
          />
        </div>
        <h1>Christian Patiño</h1>
        <h2>Senior Frontend Developer</h2>
      </header>
      <main>
        <p>
          Systems engineer with 9+ years of experience focused on front-end
          software development using React and Typescript. Extensive background
          in the full software development life cycle including requirements
          definition, evaluation, design, implementation, testing, and
          maintenance.
        </p>
        <h3>WIP</h3>
      </main>
      <footer>
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
