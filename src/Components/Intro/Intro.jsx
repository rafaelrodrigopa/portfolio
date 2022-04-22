import React from "react";
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from 'react';
import { themeContext } from "../../Context";

const Intro = () => {

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Rafael Almeida</span>
                    <span>Desenvolvedor full stack freelancer com alto nível de experiência no desenvolvimento de soluções.</span>
                </div>
                <button className="button i-button">
                Me contrate
            </button>

            <div className="i-icons">
                <a href=""><img src={Github} alt="icone github" /></a>
                <a href=""><img src={LinkedIn} alt="icone linkedin" /></a>
                <a href=""><img src={Instagram} alt="icone instagram" /></a>
            </div>

            </div>
            <div className="i-right">

                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />

                <img src={glassesimoji} alt="" />

                <div style={{top: '-4%',left: '68%'}}>
                    <FloatingDiv image={Crown} txt1='Desenvolvedor' txt2='Web'/>
                </div>

                <div style={{top: '18.2rem',left: '3rem'}}>
                    <FloatingDiv image={thumbup} txt1='Prêmio' txt2='Melhor design'/>
                </div>

                {/* blur divs */}
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: '#c1f5ff',top: '17rem',width: '21rem', height: '11rem', left: '-9rem'}}></div>

            </div>
        </div>
    )
}
export default Intro