import "./ProjectCard.css";

function ProjectStack(props) {
  return (
    <div className="project_stack_label">
      <p>{props.text}</p>
    </div>
  );
}

export default ProjectStack;
