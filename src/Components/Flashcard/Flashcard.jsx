import "../Flashcard/FlashCard.scss";
import wordsData from "../words-data.json";
import { useState } from "react";

export default function Flashcard() {
  const [showTranslation, setShowTranslation] = useState(false);
  const randomIndex = Math.floor(Math.random() * wordsData.length);
  const [currentCard, setCurrentCard] = useState(wordsData[randomIndex]);
  const showTranslationBtn = () => {
    setShowTranslation(true);
    setCurrentCard;
  };

  return (
    <div className="flash-card-container">
      <div className="flash-card-wrapper">
        <h2 className="flash-card-word">{currentCard.english}</h2>
        <p className="flash-card-transcription">{currentCard.transcription}</p>
        {showTranslation && (
          <div>
            <p className="flash-card-russian">{currentCard.russian}</p>
          </div>
        )}
        {!showTranslation && (
          <div>
            <button className="flash-card-btn" onClick={showTranslationBtn}>
              Показать перевод
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
