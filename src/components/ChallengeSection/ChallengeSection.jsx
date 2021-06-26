import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";
const ChallengeSection = ({
    selectedParagraph,
    testInfo,
    onInputChange,
    words,
    characters,
    wpm,
    timeRemain,
    timerStart,
    startAgain,
}) => {
    // console.log(props)
    return (
        <div className="challenge_section_container">
            <h1 className="challenge_section_header" data-aos="fade-down">
                Take a Speed Test Now
                <TestContainer
                    selectedPara={selectedParagraph}
                    words={words}
                    characters={characters}
                    wpm={wpm}
                    timeRemain={timeRemain}
                    timeStarted={timerStart}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                    startAgain={startAgain}
                />
            </h1>
        </div>
    );
};

export default ChallengeSection;

//instead of props destructuring of variables in props

//{props} =>{selectedParagraph,words,characters,wpm}
