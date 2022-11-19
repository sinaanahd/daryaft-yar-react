import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Shop from './Components/shop-bot/shop';
import Home from './Components/shop-bot/botHome';
import Coin from './Components/Coin/coin';
import Wallet from './Components/Wallet/wallet';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import AddCoin from './Components/AddCoin/add-coin';
import Cart from './Components/cart/cart';
import FinalCart from './Components/final-cart/final-cart';
import withBackEndData from './Components/hoc/with-back-end-data';
import UserForm from './Components/user-from/user-form';
class App extends Component {
  componentDidMount() {
  }
  // static propTypes = {
  //   cookies: instanceOf(Cookies).isRequired
  // };
  // state = {
  //   user: this.props.cookies.get("user") || "",
  //   books: this.props.cookies.get("books") || "",
  //   needed_books: this.props.cookies.get("needed_books") || "",
  //   first_rendered_books: this.props.cookies.get("first_rendered_books") || "",
  //   cart: this.props.cookies.get("cart") || "",
  //   publishers: this.props.cookies.get("publishers") || "",
  //   data_user: this.props.cookies.get("data_user") || "",
  // };
  // componentDidMount() {
  //   let books, needed_books, first_rendered_books, user, cart, data_user;
  //   let publishers = [];
  //   const us_id = window.Telegram.WebApp.initData;
  //   const final_id = "341393410"; 
  //   axios
  //     .get("https://daryaftyar.ir/storeV2/books")
  //     .then((res) => {
  //       // filling the main books varibale
  //       books = res.data;
  //       needed_books = books.slice(0, 30);
  //       first_rendered_books = books.slice(0, 30);
  //       this.handleCookie("books", books);
  //       this.handleCookie("needed_books", needed_books);
  //       this.handleCookie("first_rendered_books", first_rendered_books);
  //     })
  //     .catch((err) => console.log(err));
  //   axios
  //     .get(`https://daryaftyar.ir/storeV2/user/${final_id}`)
  //     //.get(`https://daryaftyar.ir/storeV2/user/341393410`)
  //     .then((res) => {
  //       user = res.data;
  //       this.handleCookie("user", user);
  //     })
  //     .catch((err) => console.log(err));
  //   axios
  //     .get(`https://daryaftyar.ir/storeV2/cart/${final_id}`)
  //     //.get("https://daryaftyar.ir/storeV2/cart/341393410")
  //     .then((res) => {
  //       //filling the cart with the main object from back end
  //       cart = res.data;
  //       this.handleCookie("cart", cart);
  //     })
  //     .catch((err) => console.log(err));
  //   axios
  //     .get("https://daryaftyar.ir/storeV2/pubs")
  //     .then((res) => {
  //       res.data.forEach(p => {
  //         publishers.push({ ...p, clicked: false });
  //       });
  //       this.handleCookie("publishers", publishers);
  //     })
  //     .catch((err) => console.log(err));
  //   axios
  //     .get(`https://daryaftyar.ir/storeV2/user_real_data/${final_id}`)
  //     .then((res) => {
  //       data_user = res.data;
  //       this.handleCookie("data_user", data_user);
  //     })
  //     .catch((err) => console.log(err));
  // }
  // handleCookie = (choice,data) => {
  //   const { cookies } = this.props;
    
  //   switch (choice) {
  //     case "books":
  //       cookies.set("books", data, { path: "/" });
  //       this.setState({ books: cookies.get("books") });
  //       break;
  //     case "user":
  //       cookies.set("user", data, { path: "/" });
  //       this.setState({ user: cookies.get("user") });
  //       break;
  //     case "needed_books":
  //       cookies.set("needed_books", data, { path: "/" });
  //       this.setState({ needed_books: cookies.get("needed_books") });
  //       break;
  //     case "first_rendered_books":
  //       cookies.set("first_rendered_books", data, { path: "/" });
  //       this.setState({ first_rendered_books: cookies.get("first_rendered_books") });
  //       break;
  //     case "cart":
  //       cookies.set("cart", data, { path: "/" });
  //       this.setState({ cart: cookies.get("cart") });
  //       break;
  //     case "publishers":
  //       cookies.set("publishers", data, { path: "/" });
  //       this.setState({ publishers: cookies.get("publishers") });
  //       break;
  //     case "data_user":
  //       cookies.set("data_user", data, { path: "/" });
  //       this.setState({ data_user: cookies.get("data_user") });
  //       break;
  //   }
  // };
  render() {
    // console.log(user)
    const { data } = this.props;
    return (
      <React.Fragment>
        <Switch >
          <Route path="/bot/shop" component={Shop}/>
          <Route path="/bot/home"  component={Home} />
          <Route path="/bot/coin"  component={Coin} />
          <Route path="/bot/buy-coin"  component={AddCoin} />
          <Route path="/bot/wallet" component={Wallet} />
          <Route path="/bot/cart" component={Cart} />
          <Route path="/bot/cart-final" component={FinalCart} />
          <Route path="/bot/user-data" component={UserForm} />
          <Redirect from="/" exact to="/bot/shop" />
          {/* <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" exact component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" /> */}
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
// const App = () => {
//   const [cookies, setCookie] = useCookies(["user"]);
//   function handleCookie() {
//     setCookie("user", "sina", {
//       path: "/"
//     });
//     console.log(cookies)
//   }
  
//   return (
//     <React.Fragment>
//       <Switch >
//         <Route path="/bot-shop/shop" exact component={Shop} />
//         <Route path="/bot-shop/home" exact component={Home} />
//         <Route path="/bot-shop/coin" exact component={Coin} />
//         <Route path="/bot-shop/wallet" exact component={Wallet} />
//         {/* <Route path="/movies/:id" component={MovieForm}></Route>
//           <Route path="/movies" exact component={Movies}></Route>
//           <Route path="/customers" component={Customers}></Route>
//           <Route path="/rentals" component={Rentals}></Route>
//           <Route path="/not-found" component={NotFound} />
//           <Redirect from="/" exact to="/movies" />
//           <Redirect to="/not-found" /> */}
//       </Switch>
//     </React.Fragment>
//   );
// }

// export default App;