import { useAuthContex } from "../../Contex/AuthContexProvider/AuthContexProvider";
import "./SignOut.css";

const SignOut = () => {
  const { user } = useAuthContex();
  return (
    <div className="sign-out-page" style={{ paddingTop: "100px" }}>
      {user.name}
    </div>
  );
};

export default SignOut;
