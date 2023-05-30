import "./BookingPage.css";
import InnerHero from "../../components/InnerHero/InnerHero";
import { useLoaderData } from "react-router-dom";
import rooms from "../../data/rooms.json";

const BookingPage = () => {
  const id = +useLoaderData();
  const selectedRoom = rooms.find((room) => room.id === id) || false;
  //   console.log(selectedRoom, id);

  return (
    <section className="booking-page">
      <InnerHero img={selectedRoom.img}>Happy Booking 😍</InnerHero>
    </section>
  );
};

export default BookingPage;
