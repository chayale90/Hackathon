import img from "../../../assets/rozan.png";
import soundIcon from "../../../assets/icons/sound-icon.svg";
import "./RosPic.css";
const RosPic = () => {
  return (
    <div className="rospic">
      <img src={soundIcon} alt="sound-pic" />
      <img src={img} alt="ros-pic" />
    </div>
  );
};

export default RosPic;
