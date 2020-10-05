import React from "react";
/* Styles */
import "./SequenceCard.scss";

interface ISequenceCardProps {
  sentence: string;
}

const SequenceCard: React.FC<ISequenceCardProps> = ({ sentence }) => {
  return (
    <div className="SequenceCard">
      <p className="SequenceCard__sentence">{sentence}</p>
    </div>
  );
};

export default SequenceCard;
