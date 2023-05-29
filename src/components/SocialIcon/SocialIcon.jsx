/* eslint-disable react/prop-types */
import * as Icon from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SocialIcon.css";

const SocialIcon = ({ children, to }) => {
  const IconComponent = Icon[children];
  return (
    <div className="social-icon-component">
      <Link to={to ? to : "#"} target="_blank">
        {IconComponent && <IconComponent />}
      </Link>
    </div>
  );
};

export default SocialIcon;
