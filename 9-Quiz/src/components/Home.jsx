import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Home(){
  



    const navigate = useNavigate();
    function goToAbout(){
        navigate('/Quiz');
    }





    return(
        <main>
            <h1>Quizzical</h1>
            <h2>Video games quizzecal</h2>
            <button onClick={goToAbout} className="start-button">Start Quiz</button>
        </main>
    )


}