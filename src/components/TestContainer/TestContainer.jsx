import React from "react";
import "./TestContainer.css";
import TryAgainContainer from "../TryAgainContainer/TryAgainContainer";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
const TestContainer = ({
    selectedPara,
    words,
    characters,
    wpm,
    timeRemain,
    timeStarted,
    testInfo,
    onInputChange,
    startAgain,
}) => {
    const timeRemaining = timeRemain;

    return (
        <div className="test_container">
            {timeRemain > 0 ? (
                <div className="typing_challenge_cont" data-aos="fade-up">
                    <TypingChallengeContainer
                        selectedParagraph={selectedPara}
                        timeRemaining={timeRemain}
                        timeStart={timeStarted}
                        word={words}
                        character={characters}
                        wpms={wpm}
                        testInfo={testInfo}
                        onInputChange={onInputChange}
                        startAgain={startAgain}
                    />
                </div>
            ) : (
                <div className="try_again_container">
                    <TryAgainContainer
                        word={words}
                        character={characters}
                        wpms={wpm}
                        startAgain={startAgain}
                    />
                </div>
            )}
        </div>
    );
};

export default TestContainer;
