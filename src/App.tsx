import React, { useState } from "react";
import "./App.css";
/* Util */
import math from "./util/mathUtils";
/* Constants */
import { _artist_, _song_, _album_, _genre_ } from "./constants/rulenames";

function App() {
  /* State */
  const [sentences, setSentences] = useState<string[]>([]);

  const handleGenerateSentence = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    music_play();
  };

  const getRndWord = (arr: string[]): string => {
    const index = math.rndIndex(arr);
    return arr[index];
  };

  // I want to, I would like to ~
  const desire_verbs: string[] = ["want", "would like"];
  const play_verbs_infinitive: string[] = ["listen to", "hear"];

  const play_request_infinitive = (): string => {
    const _desire_verb: string = getRndWord(desire_verbs);
    const _play_verb_infinitive: string = getRndWord(play_verbs_infinitive);
    return `I ${_desire_verb} to ${_play_verb_infinitive}`;
  };

  // Play me, put on for me ~
  const polite_request_verbs: string[] = ["could", "would", "can"];
  const play_verbs_imperative: string[] = ["play", "put on"];
  const play_request_imperative = (): string => {
    const _polite_request_verb = getRndWord(polite_request_verbs);
    const _play_verb_imperative = getRndWord(play_verbs_imperative);
    return `${_polite_request_verb} you ${_play_verb_imperative}`;
  };

  // Main
  const music_play = () => {
    const rnd_request: string[] = [
      play_request_infinitive(),
      play_request_imperative(),
    ];
    const rnd_subject: string[] = [
      ..._artist_,
      ..._song_,
      ..._album_,
      ..._genre_.map((genre) => `${genre} music`),
    ];

    const sentence: string = `${getRndWord(rnd_request)} ${getRndWord(
      rnd_subject
    )}`;
    setSentences((state) => [sentence, ...state]);
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
