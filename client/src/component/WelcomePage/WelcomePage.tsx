import { FullButton, BorderButton } from "../CostumeComponents/Button";
import RosPic from "../../assets/ros-pic.png";

import "./WelcomePage.css";
const WelcomePage = () => {
  return (
    <div className="enter-page">
      <div className="enter-page-head">
        <div className="enter-page-title">
          <h1>היי</h1>
          <h2>שמי רוזאן, ואני כאן כדי לעזור לך להגן על ביטחונך.</h2>
        </div>
        <img src={RosPic} alt="ros-pic" />
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
      <div className="btn">
        <FullButton>התחלה </FullButton>
        <BorderButton>יציאה </BorderButton>
      </div>
    </div>
  );
};

export default WelcomePage;
