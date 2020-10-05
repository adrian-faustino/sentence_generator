import React from "react";
/* Styles */
import "./SequenceCard.scss";
/* React Spring */
import { Spring } from "react-spring/renderprops";

interface ISequenceCardProps {
  sentence: string;
  highlighted?: boolean;
}

const SequenceCard: React.FC<ISequenceCardProps> = ({
  sentence,
  highlighted,
}) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 300 }}
    >
      {(props) => (
        <div className={`SequenceCard`} style={highlighted ? props : undefined}>
          <p className="SequenceCard__sentence">{sentence}</p>
        </div>
      )}
    </Spring>
  );
};

export default SequenceCard;
