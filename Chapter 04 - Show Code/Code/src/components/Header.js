import logo from "../../logo.jpg";

const Header = () => (
  <div className="header container">
    <img src={logo} alt="logo img" className="nav-logo" />
    <ul className="nav-bar container">
      <li className="nav-item">Home</li>
      <li className="nav-item">About</li>
      <li className="nav-item">Cart-items</li>
    </ul>
  </div>
);

export default Header;
