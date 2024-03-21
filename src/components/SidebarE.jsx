import React, { useContext } from "react";
import { bubble as Menu } from "react-burger-menu";
import "../Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import logout from "../assets/logout.png";
import { AuthContext } from "../context/auth.context";

function SidebarE() {
    const { authenticateUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        authenticateUser();
        navigate("/");
    };

    return (
        <Menu className="burger-button menu-sidebar">
            <Link className="menu-item" to={"/crear-ruta"}>
                <p>Crea una ruta</p>
            </Link>
            <Link className="menu-item" to={"/"}>
                <p>Home</p>
            </Link>
            <Link className="menu-item" to={"/profile"}>
                <p>Perfil</p>
            </Link>
            <Link className="menu-item" to={"/user-rutas"}>
                <p>Tus rutas</p>
            </Link>

            <button onClick={handleLogout} className="logoutbtn">
                <img src={logout} alt="logout" width={"30px"} />
            </button>
        </Menu>
    );
}

export default SidebarE;
