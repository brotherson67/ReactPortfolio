import "./NavigationMaster.css";

function NavigationMaster() {
  return (
    <div className="navigation">
      <div className="logo">
        <h1>MB</h1>
      </div>
      <div className="links">
        <a href="#about-me">ABOUT ME</a>
        <a href="#work">PROJECTS</a>
        <a href="#contact-me">CONTACT</a>
        <a href="#resume">RESUME</a>
      </div>
    </div>
  );
}

export default NavigationMaster;
