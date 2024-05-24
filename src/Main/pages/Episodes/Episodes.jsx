import React from "react";
import FilterByName from "../../components/FilterByName.jsx";
import CardList from "../../components/CardList.jsx";

export default function Episode() {
  return (
    <div className="basic">
      <img src="/images/Episodes-img.png" alt="logo" id="episodes-img" />
      <section id="episode-filter">
        <FilterByName text={"Filter by name or episode (ex. S01 or S01E02)"} />
      </section>

      <CardList to={"/episodesDetails"} cardType="Card" />

      <button className="button-more">LOAD MORE</button>
    </div>
  );
}
