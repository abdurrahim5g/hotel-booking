import Facilities from "../../components/Section/Facilities/Facilities";
import Hero from "../../components/Section/Hero/Hero";
import RoomListings from "../../components/Section/RoomListings/RoomListings";
import VideoPopup from "../../components/Section/VideoPopup/VideoPopup";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero></Hero>
      <RoomListings></RoomListings>
      <VideoPopup></VideoPopup>
      <Facilities></Facilities>
    </div>
  );
};

export default Home;
