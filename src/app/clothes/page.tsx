

import { title } from "process";
import React from "react";


const tShirtsData = [
    {
      name: "Classic Tee",
      id: 1,
      title: "Timeless Comfort",
      price: 1200,
      img: "/img1.jpeg",
    },
    {
      name: "Sporty Fit",
      id: 2,
      title: "Active and Stylish",
      price: 800,
      img: "/img2.jpeg",
    },
    {
      name: "Premium Cotton",
      id: 3,
      title: "Soft & Elegant",
      price: 600,
      img: "/img3.jpeg",
    },
    {
      name: "Urban Vibe",
      id: 4,
      title: "Casual Cool",
      price: 500,
      img: "/img4.jpeg",
    },
    {
      name: "Bold Statement",
      id: 5,
      title: "Rugged & Tough",
      price: 1100,
      img: "/img5.jpeg",
    },
    {
      name: "Everyday Wear",
      id: 6,
      title: "Comfortable & Reliable",
      price: 900,
      img: "/img7.jpeg",
    },
  ];
  


  const clothes = () => {
    return (
    
        <div className="watches" data-aos="fade-in">
          {tShirtsData.map((watch) => (
            <div key={watch.id} className="watch-card">
             <img src={watch.img} alt={watch.name} />
             <h3>{watch.name}</h3>
             <p>{watch.title}</p>
             <div  className="price">${watch.price}</div>
             <button>Add to Cart</button>
            </div>
          ))}
        </div>
     
    );
  };
  
  export default clothes;