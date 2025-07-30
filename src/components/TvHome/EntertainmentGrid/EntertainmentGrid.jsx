// src/components/EntertainmentGrid/EntertainmentGrid.jsx
import React from "react";
import styles from "./EntertainmentGrid.module.css";

const services = [
  {
    name: "TV+",
    description: "Stream award-winning Apple Originals on every screen.",
    logo: "/images/icons/tv_plus_logo.svg",
  },
  {
    name: "Music",
    description: "All music. Highest audio quality. Zero ads.",
    logo: "/images/icons/apple_music_logo.svg",
  },
  {
    name: "Fitness+",
    description: "From HIIT to Meditation, there’s something for everyone.",
    logo: "/images/icons/fitness_plus_logo.svg",
  },
  {
    name: "Arcade",
    description: "Best collection of mobile games for every player.",
    logo: "/images/icons/arcade_logo.svg",
  },
];

const EntertainmentGrid = () => (
  <div className={styles.container}>
    <img
      src="/images/home/entertainment_hero.jpg"
      alt="Games and shows on Apple TV"
      className={styles.heroImage}
    />
    <div className={styles.grid}>
      {services.map((service) => (
        <div key={service.name} className={styles.service}>
          <img src={service.logo} alt={service.name} />
          <p>{service.description}</p>
          <a href="#">Try it free</a>
          <a href="#">Learn more {">"}</a>
        </div>
      ))}
    </div>
  </div>
);
export default EntertainmentGrid;
