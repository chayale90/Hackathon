import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context, globalType } from "../Context/Context";
import ReturnQuestion from "../../assets/icons/returnQuestion.svg";
import Question from "./Question";
import "./FormPage.css";

const FormPage: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { setRiskLevel } = useContext(Context) as globalType;
  const navigate = useNavigate();
  
  useEffect(() => {
    questionIndex === questions.length && navigate("/riskLevel");
  }, [questionIndex]);

  const questions = [
    "אם את מפחדת או חוששת מאדם הקרוב אליך?",
    "האם פוגעים בך נפשית, מילולית, רגשית כלכלית, פיזית?",
    "האם ספרת למישהו את מה שעובר עליך באמת?",
    "האם הפגיעה היא באופן קבוע?",
    "האם היית רוצה לברוח מהמקום הזה?",
  ];

  const processImg = [
    "process1.png",
    "process2.png",
    "process3.png",
    "process4.png",
    "process5.png",
  ];

  const [resultsArr] = useState<boolean[]>([]);

  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prevIndex) => prevIndex - 1);
      resultsArr.pop();
    }
  };

  const handleX = () => {
    resultsArr.push(false);
    handleNextQuestion();
    isFullArray();
  };

  const handleV = () => {
    resultsArr.push(true);
    handleNextQuestion();
    isFullArray();
  };

  const isFullArray = () => {
    if (questionIndex == 4) {
      checkResults();
    }
  };

const checkResults = () => {
  const [q1, q2, q3, q4, q5] = resultsArr;

  if ((q1 && (q4 || q2 || q5)) || q4 || q2) {
    setRiskLevel("high");
  } else if ((q1 && !q2 && !q3 && !q4 && !q5) ||
    (q1 && !q2 && q3 && !q4 && !q5) ||
    (!q1 && !q2 && !q3 && !q4 && q5)) {
    setRiskLevel("middle");
  } else if ((!q1 && !q2 && q3 && !q4 && !q5) ||
    (!q1 && !q2 && !q3 && !q4 && !q5)) {
    setRiskLevel("low");
  }

  resultsArr.forEach((result, index) => {
    console.log(`q${index + 1}: ${result}`);
  });
};


  return (
    <div className="question page">
      <img src={`src/assets/${processImg[questionIndex]}`} alt="process1" />
      <div className="weHere">אנחנו כאן לשמוע את קולך!</div>
      <div className="numberQ">שאלה {questionIndex + 1} מתוך 5</div>
      <p>{questions[questionIndex]}</p>
      {questionIndex < questions.length && (
        <Question onV={handleV} onX={handleX} />
      )}
      <img
        onClick={handlePrevQuestion}
        src={ReturnQuestion}
        alt="ReturnQuestion"
      />
    </div>
  );
};

export default FormPage;
