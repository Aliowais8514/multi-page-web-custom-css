import { url } from "inspector";
import React from "react";

const about = () => {
  return (
    <div>
      <section
        className="about"
        style={{ backgroundImage: "url(/bg-img2.jpg)" }}
      >
        <div className="about-container">
          <h2 className="fade-in">About Us</h2>
          <p>
          Welcome to ClothesWorld, where fashion meets effortless comfort. Our curated collection features high-quality apparel for every occasion. Each piece blends modern design with timeless style, ensuring you look and feel your best wherever life takes you. Discover the perfect outfit to elevate your wardrobe with ClothesWorld.
          </p>
        </div>
      </section>
    </div>
  );
};

export default about;