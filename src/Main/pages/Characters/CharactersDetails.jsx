import React from "react";
import Exit from "../../components/Exit.jsx"

export default function CharactersDetails() {
  return (
    <div className="basic">
      <Exit to={"/characters"}/>

      <img
        src="/images/circle-Rich-Sanchez.jpg"
        alt="circle-Rich-Sanchez"
        className="circle"
      />

      <div className="title">Rick Sanchez</div>
      <div className="info">
        <div className="informations">
          <h3>Informations</h3>
          <div className="item">
            <h4>Genger</h4>
            <h5>Male</h5>
          </div>
          <div className="item">
            <h4>Status</h4>
            <h5>Alive</h5>
          </div>
          <div className="item">
            <h4>Specier</h4>
            <h5>Human</h5>
          </div>
          <div className="item">
            <h4>Origin</h4>
            <h5>Earth (C-137)</h5>
          </div>
          <div className="item">
            <h4>Location</h4>
            <h5>Earth (Replacement Dimension)</h5>
          </div>
        </div>
        <div className="episodes">
          <h3>Episodes</h3>
          <div className="item">
            <h4>S01E01</h4>
            <h5>Pilot</h5>
            <h6>December 2, 2013</h6>
          </div>
          <div className="item">
            <h4>S01E03</h4>
            <h5>Lawnmower Dog</h5>
            <h6>December 9, 2013</h6>
          </div>
          <div className="item">
            <h4>S01E03</h4>
            <h5>Anatomy Park</h5>
            <h6>December 16, 2013</h6>
          </div>
          <div className="item">
            <h4>S01E04</h4>
            <h5>M. Night Shaym-Aliens!</h5>
            <h6>January 13, 2014</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
