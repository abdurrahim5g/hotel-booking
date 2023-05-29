import * as Icon from "react-icons/fa";
import "./SingleFacility.css";

// eslint-disable-next-line react/prop-types
const SingleFacility = ({ facility }) => {
  // eslint-disable-next-line react/prop-types
  const { title, icon, disc } = facility;

  const IconComponent = Icon[icon];

  return (
    <div className="single-facility-component">
      <div className="icon">{IconComponent && <IconComponent />}</div>
      <div className="facility-info">
        <h4>{title}</h4>
        <p>{disc}</p>
      </div>
    </div>
  );
};

export default SingleFacility;
