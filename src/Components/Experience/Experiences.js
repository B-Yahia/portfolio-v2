import "./Experience.css";
import Experience from "./Experience.js";
import ExperiencesData from "../../Data/ExpreiencesList.js";

function Experiences() {
  return (
    <div className="page_section">
      <p className="page_section_title">Experinces</p>
      <div className="experiences_container">
        {ExperiencesData.map((data) => (
          <Experience
            company={data.company}
            position={data.position}
            duration={data.duration}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
