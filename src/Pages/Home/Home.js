import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Home.css";
import StackTitle from "../../Components/StackTitle/StackTitle";
import Me from "../../Images/me-bg.png";

function Home() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="body_container">
      <div className="text_container">
        <p>I</p>
        <p>am</p>
        <span>Yahia</span>
        <p className="text_name">and im</p>
      </div>
      <div className="hero_section">
        <div className="img_section">
          <div className="square">
            <div></div>
          </div>
          <img src={Me} alt="my picture" />
        </div>
        <div className="stack">
          {visibleIndex === 0 && <StackTitle title="Backend" />}
          {visibleIndex === 1 && <StackTitle title="Frontend" />}
          {visibleIndex === 2 && <StackTitle title="FullStack" />}
        </div>
      </div>
    </div>
  );
}

export default Home;
