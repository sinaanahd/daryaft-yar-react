import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import React, { Component } from 'react';
import Shop from './Components/shop-bot/shop';
import Home from './Components/shop-bot/botHome';
import Coin from './Components/Coin/coin';
import Wallet from './Components/Wallet/wallet';
import AddCoin from './Components/AddCoin/add-coin';
import Cart from './Components/cart/cart';
import FinalCart from './Components/final-cart/final-cart';
import UserForm from './Components/user-from/user-form';
import { Redirect } from 'react-router-dom';
class App extends Component {
  componentDidMount() {
  }
  render() {
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