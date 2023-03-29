import React, { Component } from "react";
import { Link } from "react-router-dom";
import yaldaBanner from "../../../assets/images/yalda-banner-2.jpg";
class YaldaBanner extends Component {
  state = {};
  render() {
    return (
      // ! BOT
      <div className="yalda-banner">
        <Link to="./falPage">
          <img src={yaldaBanner} alt="جشنواره یلدا" />
        </Link>
      </div>
    );
  }
}

export default YaldaBanner;
