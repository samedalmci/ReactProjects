import React from "react";
import trollFaceIcon from "../images/troll-face.png"

export default function Header(){
    return(
        <header className="header">
            <img src={trollFaceIcon} alt="trol-face-icon" />
            <h1>Meme Generator</h1>
        </header>

    )
   
}