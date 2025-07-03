import React from "react";
import Entry  from "./src/components/Entry";
import Header from "./src/components/Header";
import data from "./data"

export default function App(){


    const entryElements = data.map((entry) => {
        return(
                        <Entry 
                key={entry.id}
                {...entry}
            />
        )

    })

    return(
    <>
        <Header/>
        <main className="container">
            {entryElements}
        </main>
    </>
    )
}



