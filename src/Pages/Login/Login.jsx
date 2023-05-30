import { Link } from "react-router-dom";
import "./Login.css";
import google from "../../assets/images/continue-with-google.png";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-register-form-container">
        <div className="form-content">
          <h3>Login</h3>
          <form action="#">
            <div className="single-form-item">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="single-form-item">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <div className="single-form-item">
              <button type="submit">Login</button>
            </div>
            <p>
              New to Ema-john? <Link to={"/sign-up"}>Create New Account</Link>
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

export default Login;
