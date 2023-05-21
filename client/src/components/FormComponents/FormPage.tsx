import "./FormPage.css";

const FormPage = () => {
  return (
    <div className="question">
      <img src="src/assets/process1.png" alt="process1" />
      <div className="weHere">אנחנו כאן לשמוע את קולך!</div>
      <div className="numberQ">שאלה 2 מתוך 5</div>
      <div className="question">האם את מפחדת או חוששת
        מאדם הקרוב אליך?
      </div>
      <div className="vxButtons">
        <img src="src/assets/icons/VBigIcon.svg" alt="" />
        <img src="src/assets/icons/xBigIcon.svg" alt="" />
      </div>
    </div>
  );
};

export default FormPage;
