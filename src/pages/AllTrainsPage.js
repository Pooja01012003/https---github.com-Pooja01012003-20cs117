// // pages/AllTrainsPage.js
// import React from "react";
// import TrainList from "../components/TrainList";
// import trains from "../data/trains";

// const AllTrainsPage = () => {
//   return (
//     <div>
//       <TrainList trains={trains} />
//     </div>
//   );
// };

// export default AllTrainsPage;
// pages/AllTrainsPage.js

// import React from "react";
// import TrainList from "../components/TrainList";
// import trains from "../data/trains";

// const AllTrainsPage = () => {
//   return (
//     <div>
//       <TrainList trains={trains} />
//     </div>
//   );
// };

// export default AllTrainsPage;
// src/pages/AllTrainsPage.js

// import React from "react";
// import trainData from "../trainData";

// function AllTrainsPage() {
//   return (
//     <div>
//       <h2>All Trains</h2>
//       <ul>
//         {trainData.map((train) => (
//           <li key={train.id}>
//             <p>Name: {train.name}</p>
//             <p>Departure: {train.departure}</p>
//             <p>Arrival: {train.arrival}</p>
//             <p>Departure Time: {train.departureTime}</p>
//             <p>Arrival Time: {train.arrivalTime}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React from "react";
import TrainList from "../components/TrainList";
import trains from "../data/trains";
import { Link } from "react-router-dom";
const AllTrainsPage = () => {
  return (
    <div>
      
      <TrainList trains={trains} />
    </div>
  );
};

export default AllTrainsPage;






