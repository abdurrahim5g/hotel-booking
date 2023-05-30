import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import google from "../../assets/images/continue-with-google.png";
import { useState } from "react";
import { useAuthContex } from "../../Contex/AuthContexProvider/AuthContexProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const [error, setError] = useState(false);
  const { signUpWithPass, signInWithProvider } = useAuthContex();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name === "") {
      setError("Please enter your name");
    } else if (email === "") {
      setError("Please  enter your email address");
    } else if (password === "") {
      setError("Please  enter your password");
    } else if (password.length < 6) {
      setError("Password must be 6 cherecter or more");
    } else {
      signUpWithPass(email, password)
        .then((result) => {
          console.log(result.user);
          form.reset();
          navigate("/home");
        })
        .catch((err) => {
          form.reset();
          console.log(err.code);
          setError(err.code);
        });
      setError();
    }
    return false;
  };

  // sign in with provider
  const googleProvider = new GoogleAuthProvider();
  const handleProviderSignIn = (provider) => {
    signInWithProvider(provider)
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.code);
        setError(err.code);
      });
  };

  return (
    <div className="sign-up-page">
      <div className="login-register-form-container">
        <div className="form-content">
          <h3>Sign Up</h3>
          <form action="#" onSubmit={handleSubmit}>
            <div className="single-form-item">
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="single-form-item">
              <input
                required
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="single-form-item">
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Set Password"
              />
            </div>

            {error && <span className="error-message">{error}</span>}

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
          </form>

          <div className="continue-with-google">
            <button onClick={() => handleProviderSignIn(googleProvider)}>
              <img src={google} alt="Google Login" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
