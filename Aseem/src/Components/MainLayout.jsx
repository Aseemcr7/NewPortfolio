import React from "react";
import Skills from "./Skills";
import Home from "./Home";
import Works from "./Works";
import Achive from "./Achive";

const MainLayout = () => {
  return (
    <>
  <div className="container-fluid">
    <div className="row g-1 mt-auto">
      {/* Main Content Column */}
      <div className="col-12 col-md-9">
        <Home />
        <Works />
        <Achive />
      </div>
      
      {/* Sidebar Column */}
      <div
        className="col-12 col-md-3 card"
        style={{ backgroundColor: "#15051b", border: "1px solid #2e0f54" }}
      >
        <Skills />
      </div>
    </div>
  </div>
</>

  );
};

export default MainLayout;
