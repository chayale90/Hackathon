import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context, globalType } from "../Context/Context";
import Header from "../Header/Header";
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
    if(questionIndex>0)
    setQuestionIndex((prevIndex) => prevIndex- 1);
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
    // Displaying the results in the console
    if (
      // q1=true && q4=true
      (resultsArr[0] == true && resultsArr[3] == true) ||
      // q1=true && q2=true
      (resultsArr[0] == true && resultsArr[1] == true) ||
      // q1=true && q5=true
      (resultsArr[0] == true && resultsArr[4] == true) ||
      // q4=true
      resultsArr[3] == true ||
      // q2=true
      resultsArr[1]
    ) {
      setRiskLevel("high");
    } else if (
      (resultsArr[0] == true &&
        resultsArr[1] == false &&
        resultsArr[2] == false &&
        resultsArr[3] == false &&
        resultsArr[4] == false) ||
      (resultsArr[0] == true &&
        resultsArr[1] == false &&
        resultsArr[2] == true &&
        resultsArr[3] == false &&
        resultsArr[4] == false) ||
      (resultsArr[0] == false &&
        resultsArr[1] == false &&
        resultsArr[2] == false &&
        resultsArr[3] == false &&
        resultsArr[4] == true)
    ) {
      setRiskLevel("middle");
    } else if (
      (resultsArr[0] == false &&
        resultsArr[1] == false &&
        resultsArr[2] == true &&
        resultsArr[3] == false &&
        resultsArr[4] == false) ||
      (resultsArr[0] == false &&
        resultsArr[1] == false &&
        resultsArr[2] == false &&
        resultsArr[3] == false &&
        resultsArr[4] == false)
    ) {
      setRiskLevel("low");
    }

    for (let i = 0; i < resultsArr.length; i++) {
      console.log(`q${i + 1}: ${resultsArr[i]}`);
    }
  };

  return (
    <div className="question page">
      <Header />
      <img src={`src/assets/${processImg[questionIndex]}`} alt="process1" />
      <div className="weHere">אנחנו כאן לשמוע את קולך!</div>
      <div className="numberQ">שאלה {questionIndex + 1} מתוך 5</div>
      <p>{questions[questionIndex]}</p>
      {questionIndex < questions.length && (
        <Question onV={handleV} onX={handleX} />
      )}
      <img onClick={handlePrevQuestion} src={ReturnQuestion} alt="ReturnQuestion" />
    </div>
  );
};

export default FormPage;
