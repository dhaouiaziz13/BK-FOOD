import React, { useState } from "react";
import "../css/contactinfo.css";
import "../css/mainPage.css";
import videoBg from "../assets/Video-Bateau.mp4";
import Navbar from "../components/Navbar";
import data from "../data/data";
import { useNavigate } from "react-router-dom";

export default function ContactInfo() {
  const navigate = useNavigate();
  const [map, setMap] = useState(data[0].mapsrc);
  const [selectedCard, setSelectedCard] = useState(data[0].id);

  const handleCardClick = (item) => {
    setSelectedCard(item.id);
    setMap(item.mapsrc);
  };

  return (
    <div className="main-page-container-continfo">
      <video autoPlay loop muted className="video-bg-continfo">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-continfo"></div>
      <div className="content-container">
        <Navbar buttonText="Contact" buttonUrl="/contact" />
        <div className="con-info-container">
          <div className="cont-info-slogan">Contact Information</div>
          <div className="cards-cont">
            <div className="triple-card-cont">
              {data.map((item) => (
                <div
                  onClick={() => handleCardClick(item)}
                  className={selectedCard === item.id ? "card-active" : "cards"}
                  key={item.id}
                >
                  <div className="card-title">{item.title}</div>
                  <div className="card-sub-title">{item.sub_title}</div>
                  <div className="card-address">{item.address}</div>
                  <div className="phone">{item.phone}</div>
                  <div className="fax">{item.fax}</div>
                  <div className="email">{item.email}</div>
                </div>
              ))}
            </div>
            <div className="map">
              <iframe
                width="100%"
                height="100%"
                style={{ borderRadius: 20 ,outline: "none",border: "none"}}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={map}
              ></iframe>
            </div>
          </div>
        </div>
        <div onClick={() => navigate("/")} className="contact-footer">
          <div className="gobackhomepage" >
            <div className="backarrow">{"<"}</div>
            <div className="backarrowtext">Accueil</div>
          </div>
        </div>
      </div>
    </div>
  );
}
