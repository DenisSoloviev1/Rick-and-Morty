import React from "react";
import Exit from "../../components/Exit.jsx";
import CardList from "../../components/CardList.jsx";

export default function EpisodesDetails() {
  return (
    <div className="basic">
      <Exit to={"/episodes"} />
      <div className="title">Pilot</div>
      <div className="info">
        <div className="item">
          <h2>Episode</h2>
          <h3>SE01E01</h3>
        </div>
        <div className="item">
          <h2>Date</h2>
          <h3>December 2, 2013</h3>
        </div>
      </div>
      <CardList to={"/сharactersDetails"} cardType="ImgCard" />
    </div>
  );
}
