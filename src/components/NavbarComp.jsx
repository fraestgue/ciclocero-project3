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
            {isLoggedIn === true ? (
                <SidebarE
                    pageWrapID={"page-wrap"}
                    outerContainerId={"outer-container"}
                />
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
