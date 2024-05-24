import React from "react";
import Exit from "../../components/Exit.jsx";
import CardList from "../../components/CardList.jsx";

export default function LocationsDetails() {
  return (
    <div className="basic">
      <Exit to={"/locations"} />
      <div className="title">Earth (Replacement Dimension)</div>
      <div className="info">
        <div className="item">
          <h2>Type</h2>
          <h3>Planet</h3>
        </div>
        <div className="item">
          <h2>Dimension</h2>
          <h3>Replacement Dimension</h3>
        </div>
      </div>
      <CardList to={"/сharactersDetails"} cardType="ImgCard" />
    </div>
  );
}
