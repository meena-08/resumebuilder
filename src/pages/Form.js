import React, { useState } from "react";
import PerInfo from "./perInfo";
import Exp from "./exp";
import Template from "./template";

function Form() {
  const [page, setPage] = useState(0);

  const formTitles = ["Personal Details", "Experiences", "Templates"];
  const PageDisplay = () => {
    if (page === 0) {
      return <PerInfo />;
    } else if (page === 1) {
      return <Exp />;
    } else {
      return <Template />;
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{formTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous Step
          </button>
          <button
            disabled={page === formTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
