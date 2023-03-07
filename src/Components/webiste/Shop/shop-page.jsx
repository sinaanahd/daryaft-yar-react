import React, { Component } from "react";
import SiteHeader from "../header/header";
import SiteFooter from "../footer/site-footer";
import SideBar from "./main-content/side-bar/side-bar";
import MainContent from "./main-content/main-content";
import withWebsiteData from "../../hoc/with-website-data";
import ResponsiveFilters from "./responsive-filters/responsive-filters";
class ShopPage extends Component {
  state = {
    needed_books: false,
    active_page: 1,
  };
  handle_needed_book = (needed_books) => {
    this.setState({ needed_books });
  };
  change_active_page = (active_page) => {
    this.setState({ active_page });
  };
  componentDidMount() {
    this.props.books.forEach((element) => {
      if (element.id === 129009) console.log(element);
    });
  }
  render() {
    const {
      books,
      cart,
      user,
      data,
      add_to_cart,
      change_active,
      active_sort_item,
      add_to_recent_visit,
    } = this.props;
    return (
      <>
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
        />
        <section className="content-wrapper shop-wrapper mm-width">
          <SideBar
            original_books={books ? books : []}
            handle_needed_book={this.handle_needed_book}
            active_page={this.state.active_page}
            change_active_page={this.change_active_page}
          />
          <ResponsiveFilters
            original_books={books ? books : []}
            handle_needed_book={this.handle_needed_book}
            active_page={this.state.active_page}
            change_active_page={this.change_active_page}
            books={this.state.needed_books ? this.state.needed_books : books}
            add_to_cart={add_to_cart}
            ids={cart ? cart.cart_items_ids : []}
            change_active={change_active}
            active_sort_item={active_sort_item}
          />
          <MainContent
            books={this.state.needed_books ? this.state.needed_books : books}
            add_to_cart={add_to_cart}
            ids={cart ? cart.cart_items_ids : []}
            change_active={change_active}
            active_page={this.state.active_page}
            change_active_page={this.change_active_page}
            active_sort_item={active_sort_item}
            add_to_recent_visit={add_to_recent_visit}
          />
        </section>
        <SiteFooter pause={data.pause} error={data.error} />
      </>
    );
  }
}

export default withWebsiteData(ShopPage);
