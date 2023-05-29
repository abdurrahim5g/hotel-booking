import * as Icon from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Meta = ({ iconName, children }) => {
  const IconComponent = Icon[iconName];
  return (
    <div className="meta-component">
      {IconComponent && <IconComponent />} {children}
    </div>
  );
};

export default Meta;
