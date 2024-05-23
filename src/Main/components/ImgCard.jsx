import React from "react";
import "./Components.scss";

export default function ImgCard({ image, name, specie }) {
  return (
    <div className="card-img">
      <img src={image} alt={`${name}`} />
      <div className="info">
        <h3>{name}</h3>
        <p>{specie}</p>
      </div>
    </div>
  );
}
