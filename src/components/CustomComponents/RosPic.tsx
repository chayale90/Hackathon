import img from "../../assets/icons/rozan.svg";
import soundIcon from "../../assets/icons/sound-icon.svg";
const RosPic = () => {
  return (
    <div className="rospic">
      <img className="none" src={soundIcon} alt="sound-pic" />
      <img src={img} alt="ros-pic" />
    </div>
  );
};

export default RosPic;
