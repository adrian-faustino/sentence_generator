import React, { useEffect, useState } from "react";
/* Style */
import "./Sequences.scss";
/* Components */
import { SequenceCard } from "../";

interface ISequencesProps {
  lang: string;
  sentences: string[];
}

const Sequences: React.FC<ISequencesProps> = ({ lang, sentences }) => {
  const [mount, setMount] = useState<boolean>(false);

  setTimeout(() => {
    setMount(true);
  }, 0);

  useEffect(() => {
    return () => {
      setMount(false);
    };
  }, [lang]);

  return (
    <div className="Sequences">
      {mount ? (
        <div className="Sequences__card-container">
          {sentences.map((sentence, i) => (
            <SequenceCard
              sentence={sentence}
              highlighted={i === 0 ? true : false}
              key={`${sentence}-${i}-Sequences.tsx`}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sequences;
