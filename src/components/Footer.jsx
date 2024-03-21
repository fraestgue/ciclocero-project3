import React from "react";
import { Link } from "react-router-dom";
import logoGitHub from "../assets/GitHub-logo.png";

function Footer() {
    return (
        <div className="footer">
            <Link to={"/about"}>
                <p> Sobre Nosotros🔎</p>
            </Link>

            <a href="https://github.com/fraestgue/ciclocero-project3">
                <img src={logoGitHub} alt="logo-github" width={"60px"} />
            </a>

            <p>© 2024, by Fran y Pablo</p>
        </div>
    );
}

export default Footer;
