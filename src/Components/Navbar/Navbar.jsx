import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Rafael</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Serviços</li>
                        <li>Experiência</li>
                        <li>Portfolio</li>
                        <li>Depoimentos</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Entre em contato
                </button>
            </div>
        </div>
    )
}
export default Navbar