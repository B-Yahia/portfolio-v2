import React from "react";
import "../../App.css";
import "./StackTitle.css";

function StackTitle(props) {
  return (
    <div className="stack_title_container">
      <div className="stack_title">{props.title}</div>
      <div className="circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default StackTitle;
