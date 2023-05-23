import Header from "../Header/Header";
import "./RiskLevelPage.css";
import { FullButton, BorderButton } from "../CustomComponents/Button";
import RiskErr from "../../assets/icons/risk-error.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context, riskLevelType } from "../Context/Context";

const RiskLevelPage = () => {
  const navigate = useNavigate();
  const { riskLevel } = useContext(Context) as riskLevelType;
  const title = { high: "גבוהה", middle: "בינונית", low: "נמוכה" };
  const paragraph = {
    high: "אנא ממך, אל תחכי עוד! ופני באופן מיידי לאחת העמותו שרוצות לעזור לך להציל את חייך ואת חיי הקרובים אליך",
    middle: "בינוני",
    low: "נמוכה",
  };
  return (
    <div className="page risk-level">
      <Header />
      <img src={RiskErr} alt="" />
      <p>בהתאם לתשובות שלך, אנחנו מעריכים שרמת הסכנה שבה את נמצאת כעת הנה: </p>
      <h1>רמת סכנה {`${title[riskLevel]}`}</h1>
      <p>{`${paragraph[riskLevel]}`}</p>
      <div className="associations-btns">
        <FullButton onClick={() => navigate("/associations")}>
          פנייה אנונימית לעמותה באזור שלי
        </FullButton>
        <div className="inline-btns">
          <FullButton>צעדים מקדימים</FullButton>
          <BorderButton>לקריאת סיפורי נשים במצב שלי</BorderButton>
        </div>
        <FullButton> סיוע משפטי</FullButton>
      </div>
    </div>
  );
};

export default RiskLevelPage;
