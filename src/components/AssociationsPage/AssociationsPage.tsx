import MapIcon from "../../assets/icons/map.svg";
import "./AssociationsPage.css";
import { RegionList, Regions } from "../CustomComponents/Select";
import { useNavigate } from "react-router-dom";

const SelectAssociationsPage = () => {
  const navigate = useNavigate();

  const associationList = (click: any) => {
    if (click.target.value === Regions.North) {
      navigate("/associations/north");
    } else if (click.target.value === Regions.Central) {
      navigate("/associations/central");
    } else {
      navigate("/associations/south");
    }
  };

  return (
    <div className="page associations-page">
      <p>
        כדי לכוון אותך בצורה מדוייקת לעמותה המתאימה עבורך, אנחנו נצטרך את המיקום
        המדויק שלך!
      </p>
      <img src={MapIcon} alt="map-icon" />
      <div className="select-region">
        <h3>בחרי אזור מהרשימה:</h3>
        <RegionList click={associationList} />
      </div>
    </div>
  );
};

export default SelectAssociationsPage;
