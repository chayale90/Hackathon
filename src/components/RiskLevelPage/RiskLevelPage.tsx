import "./RiskLevelPage.css";
import { FullButton, BorderButton } from "../CustomComponents/Button";
import RiskErr from "../../assets/icons/risk-error.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context, globalType } from "../Context/Context";

const RiskLevelPage = () => {
  const navigate = useNavigate();
  const { riskLevel } = useContext(Context) as globalType;
  const title = { high: "גבוהה", middle: "בינונית", low: "נמוכה" };
  const paragraph = {
    high: "אנא ממך, אל תחכי עוד! ופני באופן מיידי לאחת העמותו שרוצות לעזור לך להציל את חייך ואת חיי הקרובים אליך",
    middle:
      " חשוב לנו להציג בפנייך כמה דרכים שיעזרו לך: אנחנו כאן בשבילך לכל שאלה!",
    low: "נמוכה",
  };
  return (
    <div className="page risk-level">
      <img src={RiskErr} alt="" />
      <p>בהתאם לתשובות שלך, אנחנו מעריכים שרמת הסכנה שבה את נמצאת כעת הנה: </p>
      <h1>רמת סכנה {riskLevel ? `${title[riskLevel]}` : "לא זוהתה"}</h1>
      <p>{`${paragraph[riskLevel]}`}</p>
      <div className="associations-btns">
        <FullButton onClick={() => navigate("/associations")}>
          פנייה אנונימית לעמותה באזור שלי
        </FullButton>
        <BorderButton className={riskLevel !== "middle" ? "none" : "block"}>
          לקריאת סיפורי נשים במצב שלי
        </BorderButton>
        <FullButton className={riskLevel !== "middle" ? "none" : "block"}>
          סיוע משפטי
        </FullButton>
        <BorderButton className={riskLevel !== "middle" ? "none" : "block"}>
          צעדים מקדימים
        </BorderButton>
      </div>
    </div>
  );
};

export default RiskLevelPage;
