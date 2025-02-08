import React from "react";
import "../css/footer.css";
import insta from "../assets/Instagram.png";
import facebook from "../assets/Facebook.png";
import x from "../assets/x_Twitter.png";
import linkedin from "../assets/LinkedIN.png";
import youtube from "../assets/Youtube.png";
import { useNavigate } from "react-router-dom";
import FooterWhatsApp from "./FooterWhatsApp";
export default function Footer({ showsocials }) {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      {showsocials ? (
        <>
          <div className="social-icons">
            <div className="insta">
              <a
                href="https://www.instagram.com/bkfood.international"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" />
              </a>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/company/bkfi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
            <div className="x">
              <a
                href="https://x.com/BK_FoodInter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={x} alt="Twitter" />
              </a>
            </div>
            <div className="youtube">
              <a
                href="https://www.youtube.com/@bkfoodinternational"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="YouTube" />
              </a>
            </div>
            <div className="facebook">
              <a
                href="https://www.facebook.com/BKFoodInternational/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
            </div>
            <FooterWhatsApp />
          </div>
          <div
            onClick={() => navigate("/contactinfos")}
            className="contactinfo-arrow-container"
          >
            <div className="contact-info-text">Contact Information</div>
            <div className="contact-arrow">
              <div className="arrow-right">{">"}</div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
