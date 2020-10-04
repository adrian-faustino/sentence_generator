import React, { useState } from "react";
import "./App.css";
/* Util */
import math from "./util/mathUtils";

function App() {
  /* State */
  const [sentence, setSentence] = useState<string>(
    "Click the button to generate a sentence!"
  );

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
    const _for = getRndWord(["for", ""]);
    const _me = "me";
    return `${_polite_request_verb} you ${_play_verb_imperative} ${_for} ${_me}`;
  };

  const music_play = () => {
    const rnd = [play_request_infinitive(), play_request_imperative()];
    setSentence(getRndWord(rnd));
  };
  return (
    <div className="App">
      <h3>setup</h3>

      <p>{sentence}</p>

      <button onClick={handleGenerateSentence}>Generate sentence</button>
    </div>
  );
}

export default App;
