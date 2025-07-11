import React, { useEffect, useState } from "react";

export default function Timer({maxRange , gameWon }){
    const[timeCount, setTimeCount] = useState(maxRange);

    useEffect(() => {
        let timer;
        if (!gameWon) {
            timer = setTimeout(() => setTimeCount(prev => prev + 1), 1000);
        }
    },[timeCount , gameWon ])

    useEffect(() => {
        if (gameWon) return; // oyun bitmişse sıfırlama
        setTimeCount(0); // "New Game" ile gameWon false olduğunda sıfırla
    }, [gameWon]);

    return(
        <span>
            {timeCount}
        </span>
    )
}