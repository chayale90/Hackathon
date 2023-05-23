import { BorderButtonWithX, FullButtonWithV } from "../CustomComponents/Button";
import RosPic from "../CustomComponents/RosPic";
import "./WelcomePage.css";
import { useNavigate } from "react-router-dom";
import Record from "../../assets/records/who_am_i.mp3";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-page">
      <div className="welcome-page-head">
        <div className="welcome-page-title">
          <h1>היי</h1>
          <h2>שמי רוזאן, ואני כאן כדי לעזור לך להגן על ביטחונך.</h2>
        </div>
        <RosPic />
      </div>
      <p>
        אני אמא לשתי בנות. עוד כילדה בקשתי לברוח מאלימות שבתוך המשפחה והצלחתי.
        בבגרותי עזבתי מערכת יחסים אלימה. אני רוצה לעזור לך לצאת ממעגל האלימות
        ע"י תשאול קצר והדרכה פשוטה דרכה תוכלי להבין טוב יותר את עצמך ומה תוכלי
        .לעשות כדי לשנות את חייך לטובה
      </p>

      <p>
        במיוחד בשבילך הקמתי את התוכנית ח.ל.ב שזה ראשי תיבות "חופש לכל בן אדם"
        דבר שאני מאמינה בו מאוד ואני מאמינה שכל אחד ואחת ראויה לחיים מוגנים
        .ובטוחים מאלימות גופנית, מילולית, רגשית וכלכלית
      </p>
      <div className="welcome-page-btn">
        <FullButtonWithV content="התחלה" click={() => navigate("/location")} />
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
