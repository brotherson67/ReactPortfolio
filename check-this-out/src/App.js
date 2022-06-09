// import of styling
import "./App.css";

// import webpage components
import NavigationMaster from "./Components/Navigation/NavBar/NavigationMaster";
import HeroComponent from "./Components/Hero/Hero";
import FooterMaster from "./Components/FooterComponents/FooterMaster";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <NavigationMaster />
      <HeroComponent />
      <MainContent />
      <FooterMaster />
    </div>
  );
}

export default App;
