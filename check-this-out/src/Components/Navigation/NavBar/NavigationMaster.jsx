// import of parent styling
import "./NavigationMaster.css";

// import components
import "../NavHome/NavHome";
import NavHome from "../NavHome/NavHome";

function NavigationMaster() {
  return (
    <div className="navigation">
      <NavHome />
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
