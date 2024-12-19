import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Home.css";
import StackTitle from "../../Components/StackTitle/StackTitle";
import Me from "../../Images/me-bg.png";
import Stack from "../../Components/Stack/Stack.js";
import Experiences from "../../Components/Experience/Experiences.js";

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
        <span className="text_container_name">Yahia</span>
        <p className="secondary_text">and im</p>
      </div>
      <div className="hero_section">
        <div className="img_section">
          <div className="square">
            <div></div>
          </div>
          <img src={Me} alt="my pic" />
        </div>
        <div className="stack">
          {visibleIndex === 0 && <StackTitle title="Backend" />}
          {visibleIndex === 1 && <StackTitle title="Frontend" />}
          {visibleIndex === 2 && <StackTitle title="FullStack" />}
        </div>
      </div>
      <div>
        <Stack />
      </div>
      <Experiences />
    </div>
  );
}

export default Home;
