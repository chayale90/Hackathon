import Header from "../Header/Header";
import "./LocationPage.css";
import { FullButtonWithV, BorderButtonWithX } from "../CustomComponents/Button";
import { useNavigate } from "react-router-dom";

const LocationPage = () => {
  const navigate = useNavigate();
  const getLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const response = await fetch(
          `https://geocode.maps.co/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        );
        const data = await response.json();
        console.log(data.display_name);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page location-page ">
      <Header />
      <p>
        שימי לב ,שמירה זמנית וזיהוי, רק במערכת שלנו בלבד. יאפשרו לי לתת לך את כל
        הכלים בהם אשמח לעזור לך, מתוך ניסיון כמה ,שיותר מידע וכמה שיותר מדויק
        עבורך יקל עליך את התהליך והמעבר.
      </p>
      <FullButtonWithV content="שמירה וזיהוי מיקום" click={getLocation} />
      <BorderButtonWithX content="ללא הזדהות" />
      <p>
        כאן אשאל אותך חמש שאלות קצרות כדי להכיר אותך ואת מצבך טוב יותר. תלחצי על
        "מתחילים"!
      </p>
      <FullButtonWithV content="מתחילים" click={() => navigate("/form")} />
    </div>
  );
};

export default LocationPage;
