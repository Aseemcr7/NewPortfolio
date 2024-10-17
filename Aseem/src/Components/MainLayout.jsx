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
          <div className="col-9">
            <Home/>
            <Works/>
            <Achive/>
          </div>
          <div
            className="card col-lg-3"
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
