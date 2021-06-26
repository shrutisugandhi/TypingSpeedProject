import React from "react";
import "./TextTypingContainer.css";
import TestLetter from "../TestLetter/TestLetter";
const TextTypingContainer = ({
    timeRemaining,
    timeStarted,
    testInfo,
    onInputChange,
}) => {
    //console.log(testInfo);
    return (
        <div className="text-typing-container">
            <div className="timer-container">
                <p className="timer">
                    00:
                    {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timeStarted && "Start Typing to check typing speed"}
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea-paragraph">
                        {testInfo.map((singleLetter, index) => {
                            return (
                                <TestLetter
                                    key={index}
                                    individualLetter={singleLetter}
                                ></TestLetter>
                            );
                        })}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                        className="textarea"
                        placeholder="start typing"
                        onChange={(e) => onInputChange(e.target.value)}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default TextTypingContainer;
