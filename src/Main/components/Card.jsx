import React from "react";
import "./Components.scss";

export default function Card({ title, info, number}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{info}</p>
      {number}
    </div>
  );
}
