import React from "react";
import { FiInstagram, FiGithub, FiLinkedin,FiTwitter  } from "react-icons/fi";

export default function Footer(){
    const instagram= ""
    const github= ""
    const linkedin= ""
    const twitter= ""

    return (
        <footer className="footer">
        <nav className="social-icons">
            <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FiInstagram />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
            <FiGithub />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FiTwitter />
            </a>
        </nav>
        </footer>
    );
}