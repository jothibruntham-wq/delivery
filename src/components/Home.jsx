import { useRef, useEffect } from "react";
import "../assets/style/style.css";
import video1 from "../assets/images/video1.mp4";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay was prevented by browser policy:", error);
        });
      }
    }
  }, []);

  return (
    <div id="home" className="page">
      <video
        ref={videoRef}
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video1} type="video/mp4" />
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay"></div>

      <div className="content" data-aos="fade-up" data-aos-duration="800">
        <h1 data-aos="fade-down" data-aos-delay="200" data-aos-duration="800">
          Delicious Food, Delivered Fresh
        </h1>
        <p data-aos="fade-up" data-aos-delay="350" data-aos-duration="800">
          Your favourite meals, right at your doorstep.
        </p>
        <button
          className="hero-btn"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="600"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
