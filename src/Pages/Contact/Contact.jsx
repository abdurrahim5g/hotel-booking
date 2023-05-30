import InnerHero from "../../components/InnerHero/InnerHero";
import ContactForm from "../../components/Section/ContactForm/ContactForm";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact-page">
      <InnerHero>Contact</InnerHero>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
