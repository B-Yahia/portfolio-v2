import React from "react";
import "../../App.css";
import "./Experience.css";

function Experience(props) {
  return (
    <div className="experience_container">
      <p className="experience_container_position">{props.position}</p>
      <p className="experience_container_company">{props.company}</p>
      <p className="experience_container_duration">{props.duration}</p>
    </div>
  );
}

export default Experience;
