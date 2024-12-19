import "./Stack.css";
import stackList from "../../Data/StackList";
import StackImage from "./StackImage";

function Stack() {
  return (
    <div className="page_section">
      <div className="page_section_title">My Stack</div>
      <div className="stack_list">
        {stackList.map((item) => (
          <StackImage img_url={item.img_url} name={item.name} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Stack;
