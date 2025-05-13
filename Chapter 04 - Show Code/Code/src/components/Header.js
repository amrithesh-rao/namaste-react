import logo from "../../logo.jpg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../contexts/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLogin, setLogin] = useState("Login");
  const isOnline = useOnlineStatus();
  const { userName } = useContext(userContext); 
  const cartItem = useSelector((store)=> store.cart.items)

  return (
    <div className="flex justify-between bg-orange-200">
      <img src={logo} alt="logo img" className="w-24" />
      <ul className="flex">
        <li className="p-5">Online Status: {isOnline ? '✅' : '🔴'}</li>
        <li className="p-5"><Link to="/">Home</Link></li> 
        <li className="p-5"><Link to="/contact">Contact US</Link></li>
        <li className="p-5"><Link to="/about">About</Link></li>
        <li className="p-5"><Link to="/grocery">Grocery</Link></li>
        <li className="p-5"><Link to="/cart">Cart-items({cartItem.length})</Link></li>
        <li className="p-5">{userName}</li>
        <li className="p-5">
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
