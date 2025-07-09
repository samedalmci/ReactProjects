import React from "react";
import padsData from "./pads"
import Pad from "./Pad"


export default function App(){
    const[pads, setpads] = React.useState(padsData)
    let soundTimer = 3000;
    
    function toggle(id) {
        setpads(prevPads => {
        const updatedPads = prevPads.map(item => {
            if (item.id === id) {            
                const audio = new Audio(item.sound);                
                audio.play();

                setTimeout(() => {
                    audio.pause();                   
                }, soundTimer);  

                return { ...item, on: true };
            }
            return item;
        });

       
        setTimeout(() => {
            setpads(pads =>
                pads.map(item =>
                    item.id === id ? { ...item, on: false } : item
                )
            );
            }, soundTimer);

            return updatedPads;
        });
    
    }



    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} label={pad.label}/>
    ))



    return(
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )

}


        



    




