import { useNavigate } from "react-router-dom";
import { FullButtonWithV, BorderButtonWithX } from "../CustomComponents/Button";
import Header from "../Header/Header";
import "./LocationPage.css";
import RosPic from "../CustomComponents/RosPic";

const LocationPage = ({ sourceAudio }: any) => {
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
      navigate("/form");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page location-page ">
      <Header />
      <p>
        כאן אשאל אותך חמש שאלות קצרות כדי להכיר אותך ואת מצבך טוב יותר. תלחצי על
        "מתחילים"!
      </p>
      <RosPic sourceAudio={sourceAudio} />
      <FullButtonWithV content="מסכימה" click={getLocation} />
      <BorderButtonWithX content="מוותרת כרגע" click={() => navigate("/form")} />

      <div>חשוב להדגיש שאין כאן שום תחליף לגופים המתמקצעים באלימות במשפחה ותמיד כדאי במקרה של סכנה לפנות למשטרה! </div>
    </div>
  );
};

export default LocationPage;
