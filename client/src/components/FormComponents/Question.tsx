import React from "react";

interface QuestionProps {
  content: string;
  onV: () => void;
  onX: () => void;
}

const Question: React.FC<QuestionProps> = ({ content, onV,onX }) => {
  return (
    <div>
      <div>{content}</div>
      <div className="vxButtons">
        <img src="src/assets/icons/VBigIcon.svg" alt="" onClick={onV} />
        <img src="src/assets/icons/xBigIcon.svg" alt="" onClick={onX} />
      </div>
    </div>
  );
};

export default Question;
