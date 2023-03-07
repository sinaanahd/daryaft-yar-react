import React, { Component } from "react";
import split_in_three from "../../../../functions/spilit_in_three";
import sampleProdImg from "../../../../../assets/images/svg/sample-photo.svg";
class MyOrder extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>9213123</td>
        <td className="prod-imgs">
          <img src={sampleProdImg} alt="" />
          <img src={sampleProdImg} alt="" />
          <img src={sampleProdImg} alt="" />
        </td>
        <td>۱۲ مهر ۱۴۰۱</td>
        <td>{split_in_three(263012)}</td>
      </tr>
    );
  }
}

export default MyOrder;
