import React from "react";

function Card(props) {
  const { img, onClick } = props;

  const handleClick = () => {
    // Send back up to App component what flag was selected
    const regex = /\/images\/(.+)\.png$/;
    // const str = "/images/brazil.png";
    const match = regex.exec(img);
    const countryName = match ? match[1] : "";

    onClick(countryName);
  };

  return (
    <div className="card">
      <img className="img" alt="flag" src={img} onClick={handleClick}></img>
    </div>
  );
}

export default Card;
