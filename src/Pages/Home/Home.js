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
    <div className="home_container">
      <div className="home_background"></div>
      <div className="text_container">
        <p>My</p>
        <p>name</p>
        <p>is</p>
        <p className="text_name">Yahia</p>
        <p className="vertical_text1">and</p>
        <p className="vertical_text2">i am</p>
      </div>
      <div className="hero_section">
        <div className="img_section">
          <div className="square">
            <div></div>
          </div>
          <img src={Me} />
        </div>
        <div className="stack">
          {visibleIndex === 0 && (
            <StackTitle title="Backend" className="glass" />
          )}
          {visibleIndex === 1 && (
            <StackTitle title="Frontend" className="glass" />
          )}
          {visibleIndex === 2 && (
            <StackTitle title="FullStack" className="glass" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
