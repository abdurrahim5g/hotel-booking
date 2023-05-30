import { Navigate, useLocation } from "react-router-dom";
import { useAuthContex } from "../../Contex/AuthContexProvider/AuthContexProvider";
import Loading from "../Loading/Loading";

// eslint-disable-next-line react/prop-types
const Procted = ({ children }) => {
  const { user, loading } = useAuthContex();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

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
