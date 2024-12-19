import React from "react";
import "../../App.css";
import "./Projects.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import projectsData from "../../Data/ProjectsList";

function Projects() {
  return (
    <div className="body_container">
      <div className="projects_container">
        <h1>Projects </h1>
        <div className="projects_cards_container">
          {projectsData.map((project) => (
            <ProjectCard info={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
