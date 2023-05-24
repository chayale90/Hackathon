import { useParams } from "react-router-dom";

const AssociationsList = () => {
  const { region } = useParams();
  const regions = {
    north: "צפון",
    central: "מרכז",
    south: "דרום",
  };

  const obj = {
    north: { ויצו: "link", נעמת: "link", אשה_לאשה: "link" },
    central: { פורום_מיכל_סלה: "link", ויצו_נשים: "link", נעמת: "link" },
    south: {
      אשה_אשה: "link",
      נעמת: "link",
      ויצו_נשים: "link",
      הלל: "link",
      תהל: "link",
      בת_מלך: "link",
      יד_שרה: "link",
    },
  };

  let arr = [];

  for (let y in obj[region]) {
    arr.push(y);
  }

  return (
    <div className="page associations-list">
      <h1>{`רשימת עמותות באזור ה${regions[region]}`}</h1>
      <ul>
        {arr.map((value, index) => (
          <li key={index + 1}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default AssociationsList;
