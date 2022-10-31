import React from "react";
import "./Reservation.css";

const Reservation = ({ reservation, deleteRes }) => {
  return (
    <div className="reservation" key={reservation.name}>
      <h2>{reservation.name}</h2>
      <p>{reservation.date}</p>
      <p>{reservation.time} pm</p>
      <p>Number of guest: {reservation.number}</p>
      <button
        className="cancel"
        id={reservation.id}
        onClick={(e) => deleteRes(e)}
      >
        Cancel
      </button>
    </div>
  );
};

export default Reservation;
