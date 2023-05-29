import * as Icon from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ContactList.css";

// eslint-disable-next-line react/prop-types
const ContactList = ({ children, iconName, to }) => {
  const IconComponent = Icon[iconName];
  console.log(IconComponent);

  return (
    <div className="contact-list-component">
      <Link to={to ? to : "#"}>
        {IconComponent && <IconComponent />} {children}
      </Link>
    </div>
  );
};

export default ContactList;
