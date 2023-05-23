import {
  BorderButton,
  BorderButtonWithX,
  FullButtonWithV,
} from "../CustomComponents/Button";
import RosPic from "../CustomComponents/RosPic/RosPic";
import "./WelcomePage.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-page">
      <div className="welcome-page-head">
        <div className="welcome-page-title">
          <h1>היי</h1>
          <h2>
            שמי רוזאן,
            <br /> ואני כאן כדי לעזור לך <br />
            להגן על ביטחונך.
          </h2>
        </div>
        <RosPic />
      </div>
      <p>
        אני אמא לשתי בנות.
        <br /> כשהייתי בעצמי ילדה, הכרתי וחוויתי אלימות משפחתית והחלטתי לברוח.
        לצערי חזרתי בבגרותי למעגל האלימות אבל החלטתי לשים לזה קץ ולשתף מהניסיון
        שלי. המטרה שלי לאבחן ולשקף את רמת הסכנה שבה אישה נמצאת ולהנגיש לכל אישה
        כלים פרקטיים לצורך יציאה ממעגל האלימות לטובת חיים טובים יותר.
      </p>

      <div className="welcome-page-btn">
        <FullButtonWithV content="התחלה" click={() => navigate("/location")} />
        <div className="welcome-page-btns-position">
          <BorderButton>למידע נוסף</BorderButton>
          <BorderButton>קהילה</BorderButton>
        </div>
        <BorderButtonWithX
          content="יציאה"
          click={() =>
            // Simulate an HTTP redirect:
            window.location.replace("http://google.com")
          }
        />
      </div>
    </div>
  );
};

export default WelcomePage;
