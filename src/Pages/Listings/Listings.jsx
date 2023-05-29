import InnerHero from "../../components/InnerHero/InnerHero";
import Facilities from "../../components/Section/Facilities/Facilities";
import RoomListings from "../../components/Section/RoomListings/RoomListings";
import "./Listings.css";

const Listings = () => {
  return (
    <div className="listings-page">
      <InnerHero>Listings</InnerHero>
      <RoomListings></RoomListings>
      <Facilities></Facilities>
    </div>
  );
};

export default Listings;
