import React, { useState } from "react";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
// import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  // let navigate = useNavigate();
  // function handleCreate() {
  //   navigate("/personaldetails");
  // }

  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="logo">
          <a href="/">
            <h2>CV Builder</h2>
          </a>
        </div>
      </div>
      <div className="rightSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a exact href="/personaldetails">
            Create CV
          </a>
          <a href="/Templates">Templates</a>
          <a href="/Login/Sign-up">Login/Sign-up</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
