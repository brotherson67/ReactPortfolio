import "./FooterMaster.css";
import logo from "../../assets/images/GitHub-Mark/PNG/GitHub-Mark-32px.png";

function FooterMaster() {
  return (
    <div className="footer">
      <a href="https://github.com/brotherson67">
        <img src={logo} alt="logo" />
        <h2>Github</h2>
      </a>
    </div>
  );
}

export default FooterMaster;
