import React, { useState } from "react";
import "./App.css";
/* Sequences */
import music_play_en from "./sequences/music_play_en";
import music_play_jp from "./sequences/music_play_jp";

function App() {
  /* State */
  const [sentences_en, setSentences_en] = useState<string[]>([]);
  const [sentences_jp, setSentences_jp] = useState<string[]>([]);

  const handleGenerateSentence = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const sequence_en = music_play_en();
    setSentences_en((state) => [sequence_en, ...state]);

    const sequence_jp = music_play_jp();
    setSentences_jp((state) => [sequence_jp, ...state]);
  };

  return (
    <div className="App">
      <h3>Context-free grammar sentence generator</h3>

      {/* Generate button */}
      <button onClick={handleGenerateSentence}>Generate sentence</button>

      {/* Generated sentences */}
      <h3>English</h3>
      <div>
        {sentences_en.map((sentence_en, i) => (
          <p key={`${sentence_en}-${i}-en`}>{sentence_en}</p>
        ))}
      </div>

      <h3>Japanese</h3>
      <div>
        {sentences_jp.map((sentence_jp, i) => (
          <p key={`${sentence_jp}-${i}-jp`}>{sentence_jp}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
