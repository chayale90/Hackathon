import "./Header.css";
import Menu from "../../assets/icons/menu.svg";
import Logo from "../../assets/icons/logo.svg";
import Call100 from "../../assets/icons/call100.svg";

const Header = () => {
  return (
    <nav>
      <img src={Menu} alt="menu-btn" />
      <img src={Call100} alt="row-btn" />
      <div>عربيه</div>
      <img src={Logo} alt="row-btn" />
    </nav>
  );
};

export default Header;
