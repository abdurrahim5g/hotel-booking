import Hero from "../../components/Section/Hero/Hero";
import RoomListings from "../../components/Section/RoomListings/RoomListings";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero></Hero>
      <RoomListings></RoomListings>
    </div>
  );
};

export default Home;
