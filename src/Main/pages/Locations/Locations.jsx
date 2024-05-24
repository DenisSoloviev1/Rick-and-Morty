import React from "react";
import FilterByName from "../../components/FilterByName.jsx";
import Selector from "../../components/Selector.jsx";
import CardList from "../../components/CardList.jsx";

export default function Locations() {
  return (
    <div className="basic">
      <img src="/images/Locations-img.png" alt="logo" id="locations-img" />
      <section id="locations-filter">
        <FilterByName text={"Filter by name..."} />
        <Selector text={"Type"} />
        <Selector text={"Dimension"} />
      </section>

      <CardList to={"/locationsDetails"} cardType="Card" />

      <button className="button-more">LOAD MORE</button>
    </div>
  );
}
