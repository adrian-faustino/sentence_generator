import React, { useState } from "react";
import "./App.css";
/* Util */
import math from "./util/mathUtils";

function App() {
  /* State */
  const [sentence, setSentence] = useState<string>("test");

  const handleGenerateSentence = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSentence(math.rndInt(1, 2).toString());
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
