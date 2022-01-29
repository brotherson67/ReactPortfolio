import About from "./NavComponents/About";

function NavigationMaster() {
  return (
    <div>
      <nav>
        <h1>SiteTitle</h1>
        <h2>{About}</h2>
        <h2>Projects</h2>
        <h3>Resume</h3>
        <h2>Contact</h2>
      </nav>
    </div>
  );
}
