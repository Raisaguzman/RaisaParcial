import React from "react";
import './Card.css';

const Card = ({input1, input2}) => {
  return (
  <div className="card">
    <h2>Mi Mascota </h2>
    <p><strong>Tu mascota es un: </strong>{input1}</p>
    <p><strong>Tu mascota se llama: </strong>{input2}</p>
  </div>
)
};


export default Card;