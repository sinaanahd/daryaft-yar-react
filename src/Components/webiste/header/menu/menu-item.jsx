import React, { Component } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../../functions/scroll";
class MenuItem extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const { item } = this.props;
    return (
      <li className={item.children.length !== 0 ? "has-sub" : ""}>
        <Link
          aria-label={item.text}
          onClick={() => {
            scrollToTop();
          }}
          to={item.link_to}
          className={
            window.location.pathname === item.link_to ? "active-place" : ""
          }>
          {item.text}
        </Link>
      </li>
    );
  }
}

export default MenuItem;
