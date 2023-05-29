import SectionHeading from "../../SectionHeading/SectionHeading";
import SingleFacility from "../../SingleFacility/SingleFacility";
import "./Facilities.css";

const Facilities = () => {
  const allFacilities = [
    {
      icon: "FaCity",
      title: "City View",
      disc: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    },
    {
      icon: "FaWifi",
      title: "Free Wifi",
      disc: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    },
    {
      icon: "FaSwimmingPool",
      title: "Swiming pool",
      disc: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    },
    {
      icon: "FaRegCompass",
      title: "South View",
      disc: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    },
  ];
  return (
    <section className="facilities-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeading
              title={"Our Facilities"}
              subtitle={"Explore"}
            ></SectionHeading>
          </div>
        </div>

        <div className="row facility-row">
          {allFacilities?.map((facility, index) => (
            <div className="col-lg-6" key={index}>
              <SingleFacility facility={facility}></SingleFacility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
