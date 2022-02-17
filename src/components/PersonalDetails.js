import React from "react";
import "./PersonalDetails.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import DescriptionIcon from "@material-ui/icons/DescriptionOutlined";
import CreateIcon from "@material-ui/icons/CreateOutlined";
import Form from "../pages/Form";

function PersonalDetails() {
  return (
    <div className="personal">
      <div className="personal-heading">
        <div className="heading">
          <h1>Details</h1>
        </div>
      </div>
      <div className="personal-icons">
        <div className="icons">
          <button>
            <PersonOutlineIcon />
          </button>
          <button>
            <DescriptionIcon />
          </button>
          <button>
            <CreateIcon />
          </button>
        </div>
      </div>

      <Form />
    </div>
  );
}

export default PersonalDetails;
