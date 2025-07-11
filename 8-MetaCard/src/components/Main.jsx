import React from "react";
import {FiLinkedin, FiMail} from "react-icons/fi";


export default function Main(){
    const Name = "Melik Samed ALMACI"
    const Title = "Full Stack Developer"
    const About = "I am a front-end developer, passionate about creating accessible digital experiences. Currently focused on learning and applying accessibility best practices, I am eager to contribute to a team prioritizing user-friendly and accessible design."
    const Interests = "Football. Music. Podcast. Psychology."


    return(
        <main className="about-section">
            <div>
                <h1>{Name}</h1>
                <h2>{Title}</h2>       
                <a className="button-mail"  href="" target="_blank" rel="noopener noreferrer"><FiMail /> Linkedin</a>
                <a className="button-linkedin" href="" target="_blank" rel="noopener noreferrer"><FiLinkedin /> Linkedin</a>
            </div>
            <div>
                <h2>About</h2>
                <p>{About}</p>
                <h2>Interests</h2>
                <p>{Interests}</p>
            </div>
        </main>
    )
}