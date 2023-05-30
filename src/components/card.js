import React from "react";

function Card(props) {
  const { img } = props;

  return (
    <div className="card">
      <img className="img" alt="flag" src={img}></img>
    </div>
  );
}

export default Card;
