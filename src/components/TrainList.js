
import React from "react";
import { Link } from "react-router-dom";

const TrainList = ({ trains }) => {
  return (
    <div className="train-list-container">
      <h1 className="main-heading">WELCOME TO TRAIN BOOKING WEBSITE</h1>
      <h2>All Trains</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <Link to={`/trains/${train.id}`}>{train.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
