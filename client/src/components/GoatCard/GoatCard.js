import React from "react";

const GoatCard = props => (
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
);

export default GoatCard;
