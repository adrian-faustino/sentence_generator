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

  const desire_verbs: string[] = ["want", "would like"];
  const play_verbs_infinitive: string[] = ["listen to", "hear"];

  const play_request_infinitive = (): string => {
    const _desire_verb: string = getRndWord(desire_verbs);
    const _play_verb_infinitive: string = getRndWord(play_verbs_infinitive);
    return `I ${_desire_verb} to ${_play_verb_infinitive}`;
  };

  const music_play = () => {
    setSentence(play_request_infinitive());
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
