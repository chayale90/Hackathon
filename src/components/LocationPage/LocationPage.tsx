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
      <FullButtonWithV content="הזדהות" click={getLocation} />
      <BorderButtonWithX content="ללא הזדהות" click={() => navigate("/form")} />
    </div>
  );
};

export default LocationPage;
