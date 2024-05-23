import React from "react";
import FilterByName from "../components/FilterByName.jsx";
import Selector from "../components/Selector.jsx";
import ImgCard from "../components/ImgCard.jsx";

export default function Characters() {
  return (
    <div className="basic">
      <img src="/images/Characters-img.png" alt="logo" />
      <section>
        <FilterByName text={"Filter by name..."} />
        <Selector text={"Specie"} />
        <Selector text={"Gender"} />
        <Selector text={"Status"} />
      </section>

      <section id="cards">
        <ImgCard image="/images/Rich-Sanchez.jpg" name={"Rick Sanchez"} specie={"Human"} />
        <ImgCard image="/images/Rich-Sanchez.jpg" name={"Rick Sanchez"} specie={"Human"} />
        <ImgCard image="/images/Rich-Sanchez.jpg" name={"Rick Sanchez"} specie={"Human"} />
        <ImgCard image="/images/Rich-Sanchez.jpg" name={"Rick Sanchez"} specie={"Human"} />
        <ImgCard image="/images/Rich-Sanchez.jpg" name={"Rick Sanchez"} specie={"Human"} />
        <ImgCard image="/images/Rich-Sanchez.jpg" name={"Rick Sanchez"} specie={"Human"} />
        <ImgCard image="/images/Rich-Sanchez.jpg" name={"Rick Sanchez"} specie={"Human"} />
        <ImgCard image="/images/Rich-Sanchez.jpg" name={"Rick Sanchez"} specie={"Human"} />
      </section>

      <button className="button-more">LOAD MORE</button>
    </div>
  );
}
