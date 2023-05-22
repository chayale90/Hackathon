import "./Header.css";
import Menu from "../../assets/icons/menu.svg";
import Row from "../../assets/icons/row.svg";
import Ros from "../../assets/icons/ros-header.svg";

const Header = () => {
  return (
    <nav>
      <img src={Menu} alt="menu-btn" />
      <span>
        <img src={Ros} alt="ros-image" />
        <img src={Row} alt="row-btn" />
      </span>
    </nav>
  );
};

export default Header;
