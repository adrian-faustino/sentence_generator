import React from "react";
/* Components */
import { SequenceCard } from "../";

interface ISequencesProps {
  sentences: string[];
}

const Sequences: React.FC<ISequencesProps> = ({ sentences }) => {
  return (
    <div>
      {sentences.map((sentence, i) => (
        <SequenceCard sentence={sentence} key={`${i}-Sequences.tsx`} />
      ))}
    </div>
  );
};

export default Sequences;
