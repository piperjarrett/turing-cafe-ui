import React from "react";
import Reservation from "../Reservation/Reservation";
import "./Reservations.css";

const Reservations = ({ reservations, deleteRes }) => {
  const allReservations = reservations.map((reservation) => {
    return <Reservation reservation={reservation} deleteRes={deleteRes} />;
  });

  return <div className="reservation-container">{allReservations}</div>;
};

export default Reservations;
