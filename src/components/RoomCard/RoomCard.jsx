/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Meta from "../Meta/Meta";
import "./RoomCard.css";

const RoomCard = ({ room }) => {
  const {
    img,
    title,
    details,
    total_rooms,
    person,
    bathroom,
    price,
    available,
  } = room;
  return (
    <div className="room-card-component">
      <div className="image-area">
        <span>{available ? "Available now" : "Not Available"}</span>
        <img src={img} alt={title} />
      </div>
      <div className="room-content">
        <h5 className="price">
          ${price} <span>/ per day</span>
        </h5>
        <h4 className="title">{title}</h4>
        <p className="details">{details}</p>
        <div className="other-info">
          <Meta iconName={"FaHotel"}>{total_rooms} Total Rooms</Meta>
          <Meta iconName={"FaUsers"}>{person} Person</Meta>
          <Meta iconName={"FaBath"}>{bathroom} Bath</Meta>
        </div>
        <div className="book-room">
          <Link to="#">Book this room</Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

// {
//     "img": "https://fivestar.qodeinteractive.com/wp-content/uploads/2017/12/List-feat-img-2.jpg",
//     "title": "Single Apartment",
//     "details": "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
//     "total_room": 2,
//     "person": 4,
//     "bathroom": 2,
//     "price": 50,
//     "available": true
// }
