import React, { useState, useEffect } from "react";

export default function Quiz(){
    const [quizQuest, setQuizQuest] = useState([]);
    const [showResults, setShowResults] = useState(false);

    function shuffle(array){
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function handleSelect(qIndex, selectedAnswer){
        setQuizQuest((prev) => {
            const updated = prev.map((q,i) => {
                if(i === qIndex){  
                    return {
                        ...q,
                        selected_answer: selectedAnswer
                    };
                }else{
                    return q;
                }                
            });
            console.log(updated);
            return updated;
        })
    }

    function handleCheckAnswers() {
        const allAnswered = quizQuest.every(q => q.selected_answer !== null);

        if(!allAnswered) {
            alert("Lütfen tüm soruları cevaplayın!");
            return;
        }

        setShowResults(true);
    }

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => {
                const formatted = data.results.map(q =>{
                    const allAnswers = shuffle([
                        q.correct_answer,
                        ...q.incorrect_answers,
                    ]);

                    return {
                        question: q.question,
                        answers: allAnswers,
                        correct_answer: q.correct_answer,
                        selected_answer: null,
                    };
                });
                setQuizQuest(formatted);
            });
    }, []); 

    const renderQuestions = quizQuest.map((q, index) => (
        <div key={index} className="question">
            <h3 dangerouslySetInnerHTML={{__html: q.question}}></h3>
            <div className="options">
                {q.answers.map((answer, i) => (
                    <div key={i}>
                        <input
                            type="radio"
                            id={`${index}-${i}`}
                            name={`question-${index}`}
                            value={answer}
                            disabled={showResults}
                            checked={q.selected_answer === answer}
                            onChange={() => handleSelect(index, answer)}
                        />
                        <label
                            htmlFor={`${index}-${i}`}
                            style={{
                                    backgroundColor: showResults
                                    ? answer === q.correct_answer
                                        ? "green"
                                        : answer === q.selected_answer
                                        ? "red"
                                        : ""
                                    : "",
                            }}
                            dangerouslySetInnerHTML={{__html: answer}}
                        >
                        </label>
                    </div>
                ))}
            </div>
        </div>
    ));

    return (
        <div className="quiz-container">
            {renderQuestions}
            {!showResults && (
                <button className="start-button" onClick={handleCheckAnswers}>Check Answers</button>
            )}
        </div>
    );
}