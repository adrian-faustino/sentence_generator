import React from "react";

interface ISequenceCardProps {
  sentence: string;
}

const SequenceCard: React.FC<ISequenceCardProps> = ({ sentence }) => {
  return (
    <div>
      <h3>{sentence}</h3>
    </div>
  );
};

export default SequenceCard;
