import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailCard from "../ChallengeDetailCard/ChallengeDetailCard";
import TextTypingContainer from "../TextTypingContainer/TextTypingContainer";
const TypingChallengeContainer = ({
    selectedParagraph,
    timeRemaining,
    timeStarted,
    word,
    character,
    wpms,
    testInfo,
    onInputChange,
    startAgain,
}) => {
    return (
        <div className="typing_challenge_cont">
            {/* Details Section */}
            <div className="details_container">
                {/* words typed */}
                <ChallengeDetailCard cardName="words" cardValue={word} />
                {/* charaters typed */}
                <ChallengeDetailCard
                    cardName="character"
                    cardValue={character}
                />
                {/* WPM Speed */}
                <ChallengeDetailCard cardName="wpms" cardValue={wpms} />
            </div>
            {/* Real Challenge */}
            <div className="contaner">
                <TextTypingContainer
                    selectedParagraph={selectedParagraph}
                    timeRemaining={timeRemaining}
                    timeStarted={timeStarted}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                    startAgain={startAgain}
                />
            </div>
        </div>
    );
};

export default TypingChallengeContainer;
