import React, { useState } from "react";
/* Style */
import "./App.scss";
/* Sequences */
import music_play_en from "./sequences/music_play_en";
import music_play_jp from "./sequences/music_play_jp";
import music_play_jp_romaji from "./sequences/music_play_jp_romaji";
/* Components */
import { SequenceCard } from "./components";
/* Constants */
import { en, jp, jp_romaji, LANGUAGES } from "./constants/UIconstants";

function App() {
  /* State */
  const [lang, setLang] = useState<string>(en);
  const [sentences_en, setSentences_en] = useState<string[]>([]);
  const [sentences_jp, setSentences_jp] = useState<string[]>([]);
  const [sentences_jp_romaji, setSentences_jp_romaji] = useState<string[]>([]);

  const handleGenerateSentence = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    switch (lang) {
      case en:
        return setSentences_en((state) => [music_play_en(), ...state]);
      case jp:
        return setSentences_jp((state) => [music_play_jp(), ...state]);
      case jp_romaji:
        return setSentences_jp_romaji((state) => [
          music_play_jp_romaji(),
          ...state,
        ]);
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
      case en:
        return setSentences_en([]);
      case jp:
        return setSentences_jp([]);
      case jp_romaji:
        return setSentences_jp_romaji([]);
    }
  };

  return (
    <div className="App">
      <h3>Context-free grammar sentence generator</h3>

      {/* BEGIN: Controls */}
      <div className="App__lang-btns-container">
        {LANGUAGES.map((language) => (
          <button
            className={lang === language ? "--active" : ""}
            onClick={handleChangeLang}
            key={language}
          >
            {language}
          </button>
        ))}
      </div>

      <div className="App__sequence-controls">
        <button className="App__clear-btn" onClick={handleClear}>
          Clear
        </button>
        <button className="App__generate-btn" onClick={handleGenerateSentence}>
          Generate sentence
        </button>
      </div>
      {/* END: Controls */}

      {/* Generated sentences */}
      <h3>{lang}</h3>
      {lang === en && (
        <div>
          {sentences_en.map((sentence_en, i) => (
            <SequenceCard
              key={`${sentence_en}-${i}-en`}
              sentence={sentence_en}
            />
          ))}
        </div>
      )}

      {lang === jp && (
        <div>
          {sentences_jp.map((sentence_jp, i) => (
            <SequenceCard
              key={`${sentence_jp}-${i}-jp`}
              sentence={sentence_jp}
            />
          ))}
        </div>
      )}

      {lang === jp_romaji && (
        <div>
          {sentences_jp_romaji.map((sentence_jp_romaji, i) => (
            <SequenceCard
              key={`${sentence_jp_romaji}-${i}-jp-romaji`}
              sentence={sentence_jp_romaji}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
