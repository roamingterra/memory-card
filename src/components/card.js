import React from "react";

function Card(props) {
  const { img, onClick } = props;

  const handleClick = () => {
    onClick();
  };

  // onClick={handleClick}

  return (
    <div className="card">
      <img className="img" alt="flag" src={img} onClick={handleClick}></img>
    </div>
  );
}

export default Card;
