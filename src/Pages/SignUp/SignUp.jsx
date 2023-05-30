import { Link } from "react-router-dom";
import "./SignUp.css";
import google from "../../assets/images/continue-with-google.png";

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <div className="login-register-form-container">
        <div className="form-content">
          <h3>Sign Up</h3>
          <form action="#">
            <div className="single-form-item">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="single-form-item">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="single-form-item">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Set Password"
              />
            </div>

            <div className="single-form-item">
              <button type="submit">Sign Up</button>
            </div>
            <p>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
            <div className="divider">
              <span className="line"></span>
              <span className="or">or</span>
              <span className="line"></span>
            </div>

            <div className="continue-with-google">
              <button>
                <img src={google} alt="Google Login" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
