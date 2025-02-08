import React from "react";
import "../css/button.css";
import { useNavigate } from "react-router-dom";
export default function Button({ text, url }) {
  const navigate = useNavigate();
  return (
    <div className="nav-button" onClick={() => navigate(url)}>
      {text}
    </div>
  );
}
