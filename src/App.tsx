import React, { useState } from "react";
import "./App.css";
/* Sequences */
import music_play_en from "./sequences/music_play_en";
import music_play_jp from "./sequences/music_play_jp";

function App() {
  /* State */
  const [lang, setLang] = useState<string>("English");
  const [sentences_en, setSentences_en] = useState<string[]>([]);
  const [sentences_jp, setSentences_jp] = useState<string[]>([]);

  const handleGenerateSentence = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    switch (lang) {
      case "English":
        return setSentences_en((state) => [music_play_en(), ...state]);
      case "Japanese":
        return setSentences_jp((state) => [music_play_jp(), ...state]);
    }
  };

  const handleChangeLang = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLang(e.currentTarget.innerText);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    switch (lang) {
      case "English":
        return setSentences_en([]);
      case "Japanese":
        return setSentences_jp([]);
    }
  };

  return (
    <div className="App">
      <h3>Context-free grammar sentence generator</h3>

      {/* Controls */}
      <div>
        <button onClick={handleChangeLang}>English</button>
        <button onClick={handleChangeLang}>Japanese</button>
      </div>
      <div>
        <button onClick={handleGenerateSentence}>Generate sentence</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      {/* Generated sentences */}
      <h3>{lang}</h3>
      {lang === "English" && (
        <div>
          {sentences_en.map((sentence_en, i) => (
            <p key={`${sentence_en}-${i}-en`}>{sentence_en}</p>
          ))}
        </div>
      )}

      {lang === "Japanese" && (
        <div>
          {sentences_jp.map((sentence_jp, i) => (
            <p key={`${sentence_jp}-${i}-jp`}>{sentence_jp}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
