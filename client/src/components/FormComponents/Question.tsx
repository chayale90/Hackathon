import React from "react";

interface QuestionProps {
  content: string;
  onNext: () => void;
}

const Question: React.FC<QuestionProps> = ({ content, onNext }) => {
  return (
    <div>
      <div>{content}</div>
      <div className="vxButtons">
        <img src="src/assets/icons/VBigIcon.svg" alt="" onClick={onNext} />
        <img src="src/assets/icons/xBigIcon.svg" alt="" onClick={onNext} />
      </div>
    </div>
  );
};

export default Question;
