import React from 'react'
import './ChallengeDetailCard.css'

const ChallengeDetailCard=({cardName,cardValue})=>{
    return (
        <div className="detail-card-container">
                <div className="card-name">
                    {cardName}
                </div>
                <div className="card-value">
                    {cardValue}
                </div>
        </div>
    )
}

export default ChallengeDetailCard



//challengeDetailCard ->for count of words/characters/speed of typing