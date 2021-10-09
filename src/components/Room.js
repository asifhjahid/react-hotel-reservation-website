import React from "react";
import { Link } from "react-router-dom";
import RoomStyle from "../style/Room.styles";

export default function Room({ room }) {
  // console.log(room);
  const { name, slug, images, price } = room;
  return (
    <RoomStyle className="room">
      <div className="img-container">
        <img src={images[0]} alt="single room" />
        <div className="price-top">
          <h5>${price}</h5>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className='room-info'>{name}</p>
    </RoomStyle>
  );
}
