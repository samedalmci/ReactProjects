import React from "react";



export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
        border: "none",
        padding: "5px",
        borderRadius: "8px",
        cursor: "pointer",
    }

    
    const imgSrc = `./src/images/dice-${props.value}.png`;




    return (
        <button 
            style={styles} 
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
        >
            <img 
                src={imgSrc} 
                alt={`Dice showing ${props.value}`} 
                style={{ width: "60px", height: "60px" }} 
            />
        </button>
    );         
    
}


