/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Meta from "../Meta/Meta";
import "./RoomCard.css";

const RoomCard = ({ room }) => {
  const {
    img,
    title,
    details,
    total_room,
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
          <Meta iconName={"FaHotel"}>{total_room} Rooms</Meta>
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
