import React from "react";
import VBigIcon from "../../assets/icons/VBigIcon.svg";
import XBigIcon from "../../assets/icons/xBigIcon.svg";

interface QuestionProps {
  content: string;
  onV: () => void;
  onX: () => void;
}

const Question: React.FC<QuestionProps> = ({ content, onV, onX }) => {
  return (
    <div>
      <p>{content}</p>
      <div className="vxButtons">
        <img src={VBigIcon} alt="v-icon" onClick={onV} />
        <img src={XBigIcon} alt="x-icon" onClick={onX} />
      </div>
    </div>
  );
};

export default Question;
