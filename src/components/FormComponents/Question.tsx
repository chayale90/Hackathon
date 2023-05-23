import React from "react";

interface QuestionProps {
  onV: () => void;
  onX: () => void;
}

const Question: React.FC<QuestionProps> = ({ onV, onX }) => {
  return (
    <div className="vxButtons">
      <button className="vButton" onClick={onV} >כן</button>
      <button className="xButton" onClick={onX} >לא</button>
    </div>
  );
};

export default Question;
