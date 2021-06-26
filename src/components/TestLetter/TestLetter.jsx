import React from "react";
import "./TestLetter.css";

const TestLetter = ({ individualLetter, onInputChange }) => {
    //console.log(">>:",individualLetter);
    const { status } = individualLetter;

    const statusClassName = {
        correct: "testLetter-correct",
        incorrect: "testLetter-incorrect",
        notAttempted: "testLetter-notAttempted",
    }[status];
    return (
        <span className={`testLetter ${statusClassName}`}>
            {individualLetter.letter}
        </span>
    );
};
export default TestLetter;
