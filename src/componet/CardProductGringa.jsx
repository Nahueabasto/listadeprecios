import React from "react";
import Card from "./Card";
import PreciosGringa from "./data/PreciosGringa";
import "./CardProduct.css";

const CardProductGringa = () => {
  return (
    <div className="product-container">
      <div className="price">
      <h2>PRECIOS LA GRINGA</h2>
      </div>
      <div className="project-container">
        {PreciosGringa.map((val, ind) => {
          return (
            <Card
              id={val.id}
              key={ind}
              titulo={val.titulo}
              precio={val.precio}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardProductGringa;