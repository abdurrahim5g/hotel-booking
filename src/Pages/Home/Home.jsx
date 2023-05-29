import Hero from "../../components/Hero/Hero";
import RoomListings from "../../components/RoomListings/RoomListings";
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
