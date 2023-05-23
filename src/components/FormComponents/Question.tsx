import React from "react";
import YesBtn from "../../assets/icons/yesBtn.svg";
import NoBtn from "../../assets/icons/noBtn.svg";
import ReturnQuestion from "../../assets/icons/returnQuestion.svg";

interface QuestionProps {
  onV: () => void;
  onX: () => void;
}

const Question: React.FC<QuestionProps> = ({ onV, onX }) => {
  return (
    <div>
    <div className="vxButtons">
      <img style={{ cursor: "pointer" }} onClick={onV} src={YesBtn} alt="yesBtn" />
      <img style={{ cursor: "pointer" }} onClick={onX} src={NoBtn} alt="NoBtn" />

     </div>

  <img style={{margin:"24%"}} src={ReturnQuestion} alt="NoBtn" />
    </div>
  );
};

export default Question;
