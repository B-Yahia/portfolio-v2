import React from "react";
import "./ProjectCard.css";
import "../../App.css";
import ProjectStack from "./ProjectStack";
import git from "../../Images/StackSvg/github-box.svg";
import url from "../../Images/StackSvg/url.svg";

function ProjectCard(props) {
  return (
    <div className="project_card_container">
      <div className="project_card_bg"></div>
      <div className="project_title">{props.info.title}</div>
      <div className="project_stack">
        {props.info.stack.map((item) => (
          <ProjectStack text={item} key={item} />
        ))}
      </div>
      <div className="project_desc">{props.info.description}</div>
      <div className="project_links">
        <a href={props.info.git}>
          <img src={git} className="project_links_img" alt="git" />
        </a>
        <a href={props.info.url}>
          <img src={url} className="project_links_img" alt="url" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
