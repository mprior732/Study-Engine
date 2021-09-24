import React, { useEffect, useState } from "react";
import MicroFlashCardList from "./MicroFlashCardList";

function MicroFlashApp() {
  const [flashcards, setFlashcards] = useState([]);

  //function to shuffle the flashcards around after each refresh
  function shuffle(array) {
    let currIndex = array.length,
      randInd;
    while (currIndex !== 0) {
      randInd = Math.floor(Math.random() * currIndex);
      currIndex--;

      [array[currIndex], array[randInd]] = [array[randInd], array[currIndex]];
    }
    return array;
  }

  const getQuestions = async () => {
    try {
      const response = await fetch("http://localhost:5000/managebio");

      const jsonData = await response.json();

      //shuffles questions before appliying it to the flashcards
      shuffle(jsonData);
      setFlashcards(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div id="card-container">
      <MicroFlashCardList flashcards={flashcards} />
    </div>
  );
}

export default MicroFlashApp;
