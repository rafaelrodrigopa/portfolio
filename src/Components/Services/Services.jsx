import React from "react"; 
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from "../Card/Card";
import Resume from "./resume.pdf"
import { useContext } from 'react';
import { themeContext } from "../../Context";

const Services = () => {

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">

                {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>Services</span>
                
                <spane>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim mollitia amet assumenda quam 
                    <br />
                    porro molestias ex eum veniam quod, ab consectetur temporibus beatae iure, error est hic labore fugiat.
                </spane>

                <a href={Resume} download={true}><button className="button s-button">Download CV</button></a>

                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card
                        emoji={HeartEmoji}
                        heading = {'Design'}
                        detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                    />
                </div>
                <div style={{top: "12rem", left: '-4rem'}}>
                    <Card
                        emoji={Glasses}
                        heading = {'Developer'}
                        detail = {"HTML, CSS, Javascript, React"}
                    />
                </div>
                <div style={{top: "19rem", left: '12rem'}}>
                    <Card
                        emoji={Humble}
                        heading = {'UI/UX'}
                        detail = {"Lorem ispum dummy text are usually use in section where"}
                    />
                </div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}
export default Services