import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import ContactList from "../../ContactList/ContactList";
import SocialIcon from "../../SocialIcon/SocialIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="footer-component ">
      <div className="bg-light py-5 footer-top">
        <Container>
          <Row>
            <Col lg="4">
              <div className="logo-with-social">
                <Link to="/">
                  <img src={logo} alt="Logo" className="w-100" />
                </Link>
                <div className="footer-follow">
                  <h3 className="footer-title">Follow Us</h3>
                  <p>
                    And keep up to date with <em>Hotel Booking</em>
                  </p>
                  <div className="social-icons">
                    <SocialIcon to={"https://www.facebook.com/devrahim26"}>
                      FaFacebookF
                    </SocialIcon>
                    <SocialIcon to={"https://twitter.com/abdurrahim5g"}>
                      FaTwitter
                    </SocialIcon>
                    <SocialIcon to={"https://www.instagram.com/abdurrahim5g/"}>
                      FaInstagram
                    </SocialIcon>
                    <SocialIcon
                      to={"https://www.linkedin.com/in/abdurrahim5g/"}
                    >
                      FaLinkedinIn
                    </SocialIcon>
                    <SocialIcon to={"https://github.com/f-rahim/"}>
                      FaGithub
                    </SocialIcon>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="contact-details">
                <h3 className="footer-title">Contact</h3>
                <div className="contact-list">
                  <ContactList iconName="FaMapMarkerAlt" to="/address">
                    55 Columbus Circle, New York, NY
                  </ContactList>
                  <ContactList iconName="FaPhoneAlt" to="tel:+8801780319026">
                    +880 1780-319026
                  </ContactList>
                  <ContactList
                    iconName="FaRegEnvelope"
                    to="mailto:freelancerrahim26@gmail.com"
                  >
                    hotelbooking@example.com
                  </ContactList>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="contact-details">
                <h3 className="footer-title">Newsletter</h3>
                <p>Sign up to our newsletter for exclusive offers.</p>
                <div className="newsletter-form">
                  <form action="#">
                    <div className="single-form-item">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="single-form-item">
                      <input
                        type="submit"
                        name="subscribe"
                        id="subscribe"
                        value={"subscribe"}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-copyright footer-bottom">
        <p className="m-0 text-center">
          &copy; Copyright{" "}
          <Link to={"/"} style={{ color: "#fff" }}>
            <em>HOTEL BOOKING</em>
          </Link>{" "}
          {getYear()}. All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
