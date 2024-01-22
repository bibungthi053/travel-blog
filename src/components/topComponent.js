import React from "react";
import imageSrc from "./images/backpack.png";
import "./topComponent.css";

export default function TopComponent() {
  return (
    <div className="container">
      <img className="image" src={imageSrc} alt="Two kids with bagpack" />
      <h2 className="heading">Let's Pack Our Bags</h2>
    </div>
  );
}
