import Header from "../Header/Header";
import "./RiskLevelPage.css";
import { FullButton } from "../CustomComponents/Button";
import RiskErr from "../../assets/icons/risk-error.svg";

const RiskLevelPage = () => {
  return (
    <div className="page risk-level">
      <Header />
      <img src={RiskErr} alt="" />
      <p>בהתאם לתשובות שלך, אנחנו מעריכים שרמת הסכנה שבה את נמצאת כעת הנה: </p>
      <h1>רמת סכנה גבוהה</h1>
      <p>
        אנא ממך, אל תחכי עוד! ופני באופן מיידי לאחת העמותות שרוצות לעזור לך
        להציל את חייך והקרובים אליך!
      </p>
      <FullButton>לפנייה אנונימית לעמותה באזור שלי !</FullButton>
    </div>
  );
};

export default RiskLevelPage;
