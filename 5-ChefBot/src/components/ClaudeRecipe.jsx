import ReactMarkdown from "react-markdown"
import React from "react";

export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}