import React from "react";
import shopSalon from "./../../img/salon.png";
import shopChambre from "./../../img/chamb.png";
import './styles.scss'
const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${shopSalon})`,
          }}
        >
          <a href="/">shop</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${shopChambre})`,
          }}
        >
          <a href="/">shop</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
