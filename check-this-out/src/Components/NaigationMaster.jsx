import About from "./Navigation/NavLinks/About";
import MyProjects from "./Navigation/NavLinks/Projects";
import Resume from "./Navigation/NavLinks/Resume";
import Contact from "./Navigation/NavLinks/ContactMe";

function NavigationMaster() {
  return (
    <div>
      <nav>
        <h1>SiteTitle</h1>
        <h2>Home</h2>
        <h2>{About}</h2>
        <h2>{MyProjects}</h2>
        <h3>{Resume}</h3>
        <h2>{Contact}</h2>
      </nav>
    </div>
  );
}

export default NavigationMaster;
