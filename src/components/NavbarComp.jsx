import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import logout from "../assets/logout.png";
import { AuthContext } from "../context/auth.context";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import SidebarE from "./SidebarE";

function NavbarComp() {
    const { isLoggedIn, authenticateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        authenticateUser();
        navigate("/");
    };

    return (
        <div className="navbar">
            <div className="menu-burger">
            {isLoggedIn === true ? (
                <SidebarE
                    pageWrapID={"page-wrap"}
                    outerContainerId={"outer-container"}
                />
            ) : null}
            </div>
            <div className="logo-search">
            <Link to={"/"}>
                <img src={logo} alt="logo" width={"120px"} />
            </Link>
            <div className="searchbar">
            {isLoggedIn === true ? <SearchBar /> : null}
            </div>
            </div>
            <div>
            {isLoggedIn === true ? (
                <button onClick={handleLogout} className="logoutbtn">
                    <img src={logout} alt="logout" width={"30px"} />
                </button>
            ) : null}
            </div>
        </div>
    );
}

export default NavbarComp;
