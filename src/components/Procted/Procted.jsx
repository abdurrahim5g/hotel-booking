import { Navigate, useLocation } from "react-router-dom";
import { useAuthContex } from "../../Contex/AuthContexProvider/AuthContexProvider";

// eslint-disable-next-line react/prop-types
const Procted = ({ children }) => {
  const { user } = useAuthContex();
  const location = useLocation();

  if (user?.uid) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      state={{ from: location.pathname }}
      replace
    ></Navigate>
  );
};

export default Procted;
