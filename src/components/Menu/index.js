import React from "react";
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from "./Components/ButtonLink";


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix Logo"></img>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Prop especifica chamada children
            </ButtonLink>
        </nav>
    );
}

export default Menu;