
import React from "react";

const SingleTrain = ({ train }) => {
  return (
    <div>
      <h2>{train.name}</h2>
      <p>Departure: {train.departure}</p>
      <p>Arrival: {train.arrival}</p>
      <p>Departure Time: {train.departureTime}</p>
      <p>Arrival Time: {train.arrivalTime}</p>
    </div>
  );
};

export default SingleTrain;
