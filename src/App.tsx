import React, { useState } from "react";
import "./App.css";
/* Sequences */
import music_play_en from "./sequences/music_play_en";

function App() {
  /* State */
  const [sentences, setSentences] = useState<string[]>([]);

  const handleGenerateSentence = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const sequence_en = music_play_en();
    setSentences((state) => [sequence_en, ...state]);
  };

  return (
    <div className="App">
      <h3>Context-free grammar sentence generator</h3>

      {/* Generate button */}
      <button onClick={handleGenerateSentence}>Generate sentence</button>

      {/* Generated sentences */}
      <div>
        {sentences.map((sentence) => (
          <p>{sentence}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
