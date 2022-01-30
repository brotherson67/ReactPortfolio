import "./NavigationMaster.css";

function NavigationMaster() {
  return (
    <div className="navigation">
      <div className="logo">
        <h1>Brotherson</h1>
      </div>
      <ul>
        <li>
          <a href="#about-me">ABOUT ME</a>
        </li>
        <li>
          <a href="#work">PROJECTS</a>
        </li>
        <li>
          <a href="#contact-me">CONTACT</a>
        </li>
        <li>
          <a href="#resume">RESUME</a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMaster;
