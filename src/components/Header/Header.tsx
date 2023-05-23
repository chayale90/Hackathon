import "./Header.css";
import Menu from "../../assets/icons/menu.svg";
import Row from "../../assets/icons/row.svg";
import RosPic from "../CustomComponents/RosPic";

const Header = ({ sourceAudio }: any) => {
  return (
    <nav>
      <img src={Menu} alt="menu-btn" />
      <span>
        <RosPic sourceAudio={sourceAudio} />
        <img src={Row} alt="row-btn" />
      </span>
    </nav>
  );
};

export default Header;
