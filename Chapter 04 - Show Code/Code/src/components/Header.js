import logo from "../../logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setLogin] = useState("Login");

  return (
    <div className="header container">
      <img src={logo} alt="logo img" className="nav-logo" />
      <ul className="nav-bar container">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/contact">Contact US</Link></li>
        <li className="nav-item">Cart-items</li>
        <li className="nav-item">
          <button className="login-logout"
            onClick={()=> {
              console.log(isLogin);
            if(isLogin === "Login") {
              setLogin("Logout")
            } else {
              setLogin("Login")
            }
          }}>{isLogin}</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
