import React from "react";
import FilterByName from "../../components/FilterByName.jsx";
import Selector from "../../components/Selector.jsx";
import CardList from "../../components/CardList.jsx";

export default function Characters() {
  return (
    <div className="basic">
      <img src="/images/Characters-img.png" alt="logo" id="characters-img" />
      <section>
        <FilterByName text={"Filter by name..."} />
        <Selector text={"Specie"} />
        <Selector text={"Gender"} />
        <Selector text={"Status"} />
      </section>

      <CardList to={"/сharactersDetails"} cardType="ImgCard" />

      <button className="button-more">LOAD MORE</button>
    </div>
  );
}
