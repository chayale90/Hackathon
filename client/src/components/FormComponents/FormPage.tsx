import React, { useState } from 'react';
import Question from "./Question";
import "./FormPage.css";

const FormPage :React.FC= () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = ['אם את מפחדת או חוששת מאדם הקרוב אליך?' ,'האם פוגעים בך נפשית, מילולית, רגשית כלכלית, פיזית?', 'האם ספרת למישהו את מה שעובר עליך באמת?', 'האם הפגיעה היא באופן קבוע?', 'האם היית רוצה לברוח מהמקום הזה?'];
  const processImg = ['process1.png' ,'process2.png', 'process3.png', 'process4.png', 'process5.png'];

  const handleNextQuestion = () => {
    setQuestionIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div className="question">
      <img src={`src/assets/${processImg[questionIndex]}`} alt="process1" />

      <div className="weHere">אנחנו כאן לשמוע את קולך!</div>
      <div className="numberQ">שאלה {questionIndex+1} מתוך 5</div>

      {questionIndex < questions.length ? (
        <Question content={questions[questionIndex]} onNext={handleNextQuestion} />
      ) : (
        <div>All questions answered!</div>
      )}

    </div>
  );
};

export default FormPage;
