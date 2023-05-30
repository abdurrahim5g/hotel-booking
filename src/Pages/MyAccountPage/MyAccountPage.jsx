import { Button } from "react-bootstrap";
import { useAuthContex } from "../../Contex/AuthContexProvider/AuthContexProvider";
import InnerHero from "../../components/InnerHero/InnerHero";
import "./MyAccountPage.css";
import { useNavigate } from "react-router-dom";

const MyAccountPage = () => {
  const { user, logOut } = useAuthContex();
  const navigate = useNavigate();

  // logOut handler
  const handleLogOut = () => {
    logOut().then(() => navigate("/"));
  };

  return (
    <section className="my-account-page">
      <InnerHero>
        Welcome: {user?.displayName ? user?.displayName : "Sir/Madam"}
      </InnerHero>

      <div className="sign-out py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <Button variant="outline-primary" onClick={handleLogOut}>
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccountPage;
