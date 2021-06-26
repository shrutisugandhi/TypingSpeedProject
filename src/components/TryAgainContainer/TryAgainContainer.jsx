import React from "react";
import "./TryAgainContainer.css";

const TryAgainContainer = ({ word, character, wpms, startAgain }) => {
    return (
        <div className="try_again_container">
            <h1>Test results</h1>
            <div className="result-container">
                <p>Words: {word}</p>
                <p>Characters : {character}</p>
                <p> Words per min: {wpms}</p>
            </div>

            <div className="try_again_btn">
                <button onClick={() => startAgain()}>Try Again</button>
            </div>
        </div>
    );
};
export default TryAgainContainer;

//here redundancy of props eg.words,characters,wpm  happens ie From challengeSection ->TestContainer ->TryAgainContainer
//Above redundancy can be handled using Redux
