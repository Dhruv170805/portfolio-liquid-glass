import React from "react";
import "./GlassCard.css";
const GlassCard = ({ title, content }) => (
  <div className="glass-card">
    <h2>{title}</h2>
    <div className="glass-content">{content}</div>
  </div>
);
export default GlassCard;
