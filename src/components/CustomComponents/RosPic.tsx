import img from "../../assets/ros-pic.png";
import soundIcon from "../../assets/icons/sound-icon.svg";
import { useState } from "react";
const RosPic = ({ sourceAudio }: any) => {
  const [state, setState] = useState(false);
  const toogle = () => (state ? setState(false) : setState(true));
  const myAudioFunction = () => {
    const aAudio = new Audio(sourceAudio);
    !state ? aAudio.play() : aAudio.pause();
  };
  return (
    <div className="rospic">
      <img
        className={state ? null : "none"}
        src={soundIcon}
        alt="sound-pic"
        onClick={myAudioFunction}
      />
      <img
        src={img}
        alt="ros-pic"
        onClick={() => {
          toogle();
          myAudioFunction();
        }}
      />
    </div>
  );
};

export default RosPic;
