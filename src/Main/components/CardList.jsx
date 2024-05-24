import React from "react";
import { NavLink } from "react-router-dom";
import ImgCard from "./ImgCard.jsx";
import Card from "./Card.jsx";

export default function CardList({ to, cardType }) {
  const cardsImgData = [
    {
      image: "/images/Rich-Sanchez.jpg",
      name: "Rick Sanchez",
      specie: "Human",
    },
    {
      image: "/images/Rich-Sanchez.jpg",
      name: "Rick Sanchez",
      specie: "Human",
    },
    {
      image: "/images/Rich-Sanchez.jpg",
      name: "Rick Sanchez",
      specie: "Human",
    },
    {
      image: "/images/Rich-Sanchez.jpg",
      name: "Rick Sanchez",
      specie: "Human",
    },
    {
      image: "/images/Rich-Sanchez.jpg",
      name: "Rick Sanchez",
      specie: "Human",
    },
    {
      image: "/images/Rich-Sanchez.jpg",
      name: "Rick Sanchez",
      specie: "Human",
    },
    {
      image: "/images/Rich-Sanchez.jpg",
      name: "Rick Sanchez",
      specie: "Human",
    },
    {
      image: "/images/Rich-Sanchez.jpg",
      name: "Rick Sanchez",
      specie: "Human",
    },
  ];

  const cardsData = [
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
    { title: "Earth (C-137)", info: "Planet" },
  ];
  const episodesData = [
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"},
    {title:"Pilot", date:"December 2, 2013", number:"SE01E01"}
  ]
  return (
    <section id="cards">
      {cardType === "ImgCard"
        ? cardsImgData.map((card, index) => (
            <NavLink to={to} key={index}>
              <ImgCard
                image={card.image}
                name={card.name}
                specie={card.specie}
              />
            </NavLink>
          ))
        :cardType === "Card" ? cardsData.map((card, index) => (
            <NavLink to={to} key={index}>
              <Card title={card.title} info={card.info} />
            </NavLink>
          )): episodesData.map((card, index) => (
            <NavLink to={to} key={index}>
              <Card title={card.title} date={card.date} number={card.number}/>
            </NavLink>
          ))}
    </section>
  );
}
