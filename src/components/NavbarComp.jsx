import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import menu3 from "../assets/menu.png";
import logout from "../assets/logout.png";
import { AuthContext } from "../context/auth.context";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavbarComp() {
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  return (
    <div className="navbar">
      {isLoggedIn === true ? (
        <button className="menu">
          <img src={menu3} alt="menu" width={"30px"} />
        </button>
      ) : null}
      <Link to={"/"}>
        <img src={logo} alt="logo" width={"120px"} />
      </Link>
      {isLoggedIn === true ? <SearchBar /> : null}

      {isLoggedIn === true ? (
        <button onClick={handleLogout} className="logoutbtn">
          <img src={logout} alt="logout" width={"30px"} />
        </button>
      ) : null}
    </div>
  );
}

export default NavbarComp;
