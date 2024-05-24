import React from "react";
import "./Components.scss";

export default function ImgCard({ image, name, specie }) {
  return (
    <div className="card">
      <img src={image} alt={`${name}`} />
      <div className="bio">
        <h3>{name}</h3>
        <p>{specie}</p>
      </div>
    </div>
  );
}
