import React from "react";
import { Carousel } from "antd";
import video1 from "../../assets/slides/1.mp4";
import video2 from "../../assets/slides/2.mp4";
import video3 from "../../assets/slides/3.mp4";
import video4 from "../../assets/slides/4.mp4";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="slide" style={{ margin: "auto", marginTop: "50px" }}>
        <Carousel autoplay draggable dots={false} pauseOnHover>
          <video src={video2} autoPlay loop muted></video>
          <video src={video1} autoPlay loop muted></video>
          <video src={video3} autoPlay loop muted></video>
          <video src={video4} autoPlay loop muted></video>
        </Carousel>
      </div>
      <div className="daily"></div>
      <div className="about-us"></div>
      <div className="special-day"></div>
      <div className="testimonal"></div>
    </>
  );
};

export default HomePage;
