import SectionHeading from "../../SectionHeading/SectionHeading";
import "./RoomListings.css";
import rooms from "../../../data/rooms.json";
import RoomCard from "../../RoomCard/RoomCard";
const RoomListings = () => {
  console.log(rooms);
  return (
    <section className="room-listings-section bg-light py-5 border">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeading
              title={"Our Listings"}
              subtitle={"Explore"}
            ></SectionHeading>
          </div>
        </div>

        <div className="row " style={{ rowGap: "30px" }}>
          {rooms?.map((room, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <RoomCard room={room}></RoomCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomListings;
