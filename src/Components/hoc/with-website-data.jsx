import React from "react";
import axios from "axios";
const local_user = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : false;
const local_books = JSON.parse(localStorage.getItem("website_books"))
  ? JSON.parse(localStorage.getItem("website_books"))
  : false;
const local_cart = JSON.parse(localStorage.getItem("website_cart"))
  ? JSON.parse(localStorage.getItem("website_cart"))
  : false;
const local_hot = JSON.parse(localStorage.getItem("hot"))
  ? JSON.parse(localStorage.getItem("hot"))
  : false;
const local_last = JSON.parse(localStorage.getItem("last"))
  ? JSON.parse(localStorage.getItem("last"))
  : false;
const local_most = JSON.parse(localStorage.getItem("most"))
  ? JSON.parse(localStorage.getItem("most"))
  : false;
const local_rad = JSON.parse(localStorage.getItem("rad"))
  ? JSON.parse(localStorage.getItem("rad"))
  : false;
function withWebsiteData(Component) {
  return class withWebsiteData extends Component {
    state = {
      user: local_user ? local_user : false,
      books: local_books ? local_books : false,
      cart: local_cart ? local_cart : false,
      hot: local_hot ? local_hot : false,
      last: local_last ? local_last : false,
      most: local_most ? local_most : false,
      rad: local_rad ? local_rad : false,
      is_logged_in: true,
      active_single: false,
      pause: false,
      error: false,
      recenet_visit_arr: JSON.parse(localStorage.getItem("recenet_visit_arr"))
        ? JSON.parse(localStorage.getItem("recenet_visit_arr"))
        : [],
      recenct_place: JSON.parse(localStorage.getItem("recenet_place"))
        ? JSON.parse(localStorage.getItem("recenet_place"))
        : [],
    };
    componentDidMount() {
      this.get_books();
      if (this.state.user) {
        this.get_user(this.state.user.user_id);
        this.get_cart(this.state.user.user_id);
      }
    }
    get_user = (id) => {
      axios
        .get(`https://daryaftyar.ir/backend/api/user/${id}`)
        .then((res) => {
          const user = res.data;
          this.setState({ user });
          this.setState({ is_logged_in: true });
          localStorage.setItem("user", JSON.stringify(user));
        })
        .catch((err) => {
          this.setState({ pause: false });
          this.setState({ error: err.message });
          setTimeout(() => {
            this.setState({ error: false });
          }, 2000);
        });
    };
    get_books = () => {
      axios
        .get(`https://daryaftyar.ir/backend/api/books`)
        .then((res) => {
          const books = res.data;
          localStorage.setItem("website_books", JSON.stringify(books));
          this.setState({ books });
          this.get_book_cats();
        })
        .catch((err) => {
          this.setState({ pause: false });
          this.setState({ error: err.message });
          setTimeout(() => {
            this.setState({ error: false });
          }, 2000);
        });
    };
    get_book_cats = () => {
      axios
        .get("https://daryaftyar.ir/backend/api/get_special_group_books")
        .then((res) => {
          const { hottest, last_books, most_bought, rad_nashodani } = res.data;
          const books = [...this.state.books];
          let hot = [],
            rad = [],
            most = [],
            last = [];
          books.forEach((b) => {
            if (hottest.includes(b.id)) {
              hot.push(b);
            }
            if (last_books.includes(b.id)) {
              last.push(b);
            }
            if (most_bought.includes(b.id)) {
              most.push(b);
            }
            if (rad_nashodani.includes(b.id)) {
              rad.push(b);
            }
          });
          this.setState({ rad, most, hot, last });
          localStorage.setItem("hot", JSON.stringify(hot));
          localStorage.setItem("rad", JSON.stringify(rad));
          localStorage.setItem("last", JSON.stringify(last));
          localStorage.setItem("most", JSON.stringify(most));
        })
        .catch((err) => {
          this.setState({ pause: false });
          this.setState({ error: err.message });
          setTimeout(() => {
            this.setState({ error: false });
          }, 2000);
        });
    };
    get_cart = (id) => {
      axios
        .get(`https://daryaftyar.ir/backend/api/cart/${id}`)
        .then((res) => {
          const cart = res.data;
          this.setState({ cart });
          localStorage.setItem("website_cart", JSON.stringify(cart));
          //console.log(cart);
        })
        .catch((err) => {
          this.setState({ pause: false });
          this.setState({ error: err.message });
          setTimeout(() => {
            this.setState({ error: false });
          }, 2000);
        });
    };
    make_guest_user = () => {
      alert("new user request");
    };
    handle_active_signle = (book) => {
      this.setState({ active_single: book });
    };
    add_to_cart = (id) => {
      const old_cart = { ...this.state.cart };
      if (this.state.cart) {
        const ids = old_cart.cart_items_ids;
        ids.push(id);
        this.update_cart(ids);
      } else {
        window.location.pathname = "/login";
      }
    };
    update_cart = (ids) => {
      this.setState({ pause: true });
      axios
        .patch(
          `https://daryaftyar.ir/backend/api/cart/${this.state.user.user_id}`,
          ids
        )
        .then((res) => {
          const cart = res.data;
          this.setState({ cart });
          this.setState({ pause: false });
          localStorage.setItem("website_cart", JSON.stringify(cart));
          this.setState({ err: false });
        })
        .catch((err) => {
          this.setState({ pause: false });
          this.setState({ error: err.message });
          setTimeout(() => {
            this.setState({ error: false });
          }, 2000);
        });
    };
    handle_quan = (id, sign) => {
      this.setState({ pause: true });
      const old_cart = { ...this.state.cart };
      if (this.state.cart) {
        const ids = old_cart.cart_items_ids;
        if (sign === "+") {
          ids.push(id);
        } else if (sign === "-") {
          const index = ids.indexOf(id);
          ids.splice(index, 1);
        }
        this.update_cart(ids);
      } else {
        window.location.pathname = "/login";
      }
    };
    delete_item = (id) => {
      const old_cart = { ...this.state.cart };
      let ids = old_cart.cart_items_ids;
      ids = ids.filter((i) => i !== id);
      this.update_cart(ids);
    };
    active_sort_item = (type, status, active) => {
      let books = [];
      this.setState({ pause: true });
      if (type !== active) {
        if (status === "normal") {
          axios
            .get("https://daryaftyar.ir/backend/api/books")
            .then((res) => {
              books = res.data;
              localStorage.setItem("website_books", JSON.stringify(books));
              this.setState({ books, pause: false });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          axios
            .get(`https://daryaftyar.ir/backend/api/sortbooks/${status}`)
            .then((res) => {
              books = res.data.books;
              localStorage.setItem("website_books", JSON.stringify(books));
              this.setState({ books, pause: false });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        this.setState({ pause: false });
      }
    };
    check_discount = (code) => {
      this.setState({ pause: true });
      axios
        .patch(
          `https://daryaftyar.ir/backend/api/cart_summary/${this.state.user.user_id}`,
          {
            dis_code: code,
          }
        )
        .then((res) => {
          const cart_summary = res.data;
          const cart = { ...this.state.cart };
          console.log(cart_summary);
          cart.cart_summary = cart_summary;
          this.setState({ cart });
          localStorage.setItem("website_cart", JSON.stringify(cart));
          this.setState({ pause: false });
          // axios
          //   .get(
          //     `https://daryaftyar.ir/backend/api/payrequest/${final_id}`
          //   )
          //   .then((res) => {
          //     this.setState({ pause: false });
          //     this.setState({ re_url: res.data.url_to_pay });
          //     this.setState({ error: false });
          //   })
          //   .catch((err) => {
          //     this.setState({ pause: false });
          //     this.setState({ error: err.message });
          //     setTimeout(() => {
          //       this.setState({ error: false });
          //     }, 2000);
          //   });
        })
        .catch((err) => {
          this.setState({ pause: false });
          this.setState({ error: err.message });
          setTimeout(() => {
            this.setState({ error: false });
          }, 2000);
        });
    };
    add_to_recent_visit = (item, kind) => {
      const recenct_place = this.state.recenct_place;
      let recenet_visit_arr = [...this.state.recenet_visit_arr];
      // //! not a good way
      // let is_there = false;
      // recenet_visit_arr.forEach((b) => {
      //   if (b.id === item.id) {
      //     is_there = true;
      //   }
      // });
      if (recenct_place === kind) {
        if (recenet_visit_arr.length > 10) {
          let temp = [];
          for (let i = 1; i < recenet_visit_arr.length; i++) {
            temp.push(recenet_visit_arr[i]);
          }
          temp.push(item);
          recenet_visit_arr = temp;
        } else {
          recenet_visit_arr.push(item);
        }
      } else {
        recenet_visit_arr = [item];
        this.setState({ recenct_place: kind });
      }
      this.setState({ recenet_visit_arr });
      localStorage.setItem("recenet_place", JSON.stringify(kind));
      localStorage.setItem(
        "recenet_visit_arr",
        JSON.stringify(recenet_visit_arr)
      );
    };
    update_user = (data) => {
      const user = { ...this.state.user };
      user.real_home_number = data.real_home_number;
      user.real_address = data.real_address;
      user.real_name = data.real_name;
      user.real_postal_code = data.real_postal_code;
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
    };
    change_user = (user) => {
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
    };
    render() {
      return (
        <Component
          {...this.props}
          data={this.state}
          user={this.state.user}
          books={this.state.books}
          cart={this.state.cart}
          hot={this.state.hot}
          most={this.state.most}
          last={this.state.last}
          rad={this.state.rad}
          change_active={this.handle_active_signle}
          add_to_cart={this.add_to_cart}
          handle_quan={this.handle_quan}
          delete_item={this.delete_item}
          active_sort_item={this.active_sort_item}
          get_cart={this.get_cart}
          get_user={this.get_user}
          check_discount={this.check_discount}
          recenet_visit_arr={this.state.recenet_visit_arr}
          recenet_place={this.state.recenct_place}
          add_to_recent_visit={this.add_to_recent_visit}
          update_user={this.update_user}
          change_user={this.change_user}
        />
      );
    }
  };
}
export default withWebsiteData;
