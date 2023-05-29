import InnerHero from "../../components/InnerHero/InnerHero";
import Facilities from "../../components/Section/Facilities/Facilities";
import "./About.css";

const About = () => {
  return (
    <div className="About-page">
      <InnerHero>About</InnerHero>
      <Facilities></Facilities>
    </div>
  );
};

export default About;
