// pages/SingleTrainPage.js
// import React from "react";
// import { useParams } from "react-router-dom";
// import SingleTrain from "../components/SingleTrain";
// import trains from "../data/trains";

// const SingleTrainPage = () => {
//   const { id } = useParams();
//   const train = trains.find((train) => train.id === parseInt(id));

//   return (
//     <div>
//       {train ? <SingleTrain train={train} /> : <p>Train not found.</p>}
//     </div>
//   );
// };

// export default SingleTrainPage;
// pages/SingleTrainPage.js
import React from "react";
import { useParams } from "react-router-dom";
import SingleTrain from "../components/SingleTrain";
import trains from "../data/trains";

const SingleTrainPage = () => {
  const { id } = useParams();
  const train = trains.find((train) => train.id === parseInt(id));

  return (
    <div className="single-train-container">
      {train ? (
        <div className="single-train-content">
          <h2>{train.name}</h2>
          <p>Departure: {train.departure}</p>
          <p>Arrival: {train.arrival}</p>
          <p>Departure Time: {train.departureTime}</p>
          <p>Arrival Time: {train.arrivalTime}</p>
        </div>
      ) : (
        <p>Train not found.</p>
      )}
    </div>
  );
};

export default SingleTrainPage;

