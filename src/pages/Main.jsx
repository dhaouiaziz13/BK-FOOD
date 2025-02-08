import React from "react";
import "../css/mainPage.css";
import videoBg from "../assets/Video-SEA.mp4";
import Navbar from "../components/Navbar";
import image1 from "../assets/Cercle jaune.png";
import image2 from "../assets/Bateau-Header-BK-FOOD.png";
import Footer from "../components/Footer";

const VideoBackground = ({ src }) => (
  <video autoPlay loop muted className="video-bg">
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

const ComingSoonSection = () => (
  <div className="coming-soon-section">
    <div className="redline"></div>
    <p className="coming-soon-text">Coming Soon!</p>
  </div>
);

const TextContainer = () => (
  <div className="text-container">
    <p className="sub-text">
      <ComingSoonSection />
      We are working on a new experience. Stay tuned to discover our website soon.
    </p>
  </div>
);

const MidImageContainer = ({ image1, image2 }) => (
  <div className="mid-image-container">
    <img src={image1} alt="Background" className="image image1" />
    <img src={image2} alt="Overlay" className="image image2" />
  </div>
);

export default function MainPage() {
  return (
    <div className="main-page-container">
      <VideoBackground src={videoBg} />
      <div className="overlay"></div>
      <div className="content-container">
        <Navbar buttonText="contact" buttonUrl="/contact" />
        <div className="content">
          <TextContainer />
          <MidImageContainer image1={image1} image2={image2} />
        </div>
        <Footer showsocials={true} />
      </div>
    </div>
  );
}
