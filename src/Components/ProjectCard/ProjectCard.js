import React from "react";
import "./ProjectCard.css";
import "../../App.css";

function ProjectCard(props) {
  return (
    <div className="project_card_container">
      <div className="project_card_bg"></div>
      <img alt="img-project" src={props.img} />
      <div className="project_title">{props.title}</div>
    </div>
  );
}

export default ProjectCard;
