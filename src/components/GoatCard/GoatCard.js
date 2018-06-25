import React from "react";

const GoatCard = props => (
  <div className="img-container">
    <img onClick={() => props.handleClick(props.id)} alt={props.name} src={props.image} />
  </div>
);

export default GoatCard;
