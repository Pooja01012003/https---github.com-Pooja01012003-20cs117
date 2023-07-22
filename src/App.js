import React from "react";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import AllTrainsPage from "./pages/AllTrainsPage";
import SingleTrainPage from "./pages/SingleTrainPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AllTrainsPage />} />
          <Route path="/trains/:id" element={<SingleTrainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
