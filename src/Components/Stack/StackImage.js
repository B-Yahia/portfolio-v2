import "./Stack.css";

function StackImage(props) {
  return (
    <div className="stack_images_container">
      <img src={props.img_url} alt={props.name} className="stack_image" />
      <p className="stack_img_bg"></p>
    </div>
  );
}

export default StackImage;
