import React from "react";

import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="{props.monster.id}"
      src={`https://robohash.org/${props.monster.id}?set=set1&size=120x120`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email.toLowerCase()}</p>
  </div>
);
