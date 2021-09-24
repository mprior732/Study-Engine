import React from "react";
import MicroFlashCard from "./MicroFlashCard";

function MicroFlashCardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <MicroFlashCard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}

export default MicroFlashCardList;
