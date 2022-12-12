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
import HomePage from './Components/webiste/Home/HomePage';
import LoginPage from './Components/webiste/Login-SignUp/login';
import ShopPage from './Components/webiste/Shop/shop-page';
import SingleProdPage from './Components/webiste/single-prod/single';
import WebsiteCart from './Components/webiste/cart/cart';


class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <React.Fragment>
        <Switch >
          <Route path="/bot/shop" component={Shop} />
          <Route path="/bot/home" component={Home} />
          <Route path="/bot/coin" component={Coin} />
          <Route path="/bot/buy-coin" component={AddCoin} />
          <Route path="/bot/wallet" component={Wallet} />
          <Route path="/bot/cart" component={Cart} />
          <Route path="/bot/cart-final" component={FinalCart} />
          <Route path="/bot/user-data" component={UserForm} />
          <Route path="/home" component={HomePage} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/single-id" component={SingleProdPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/cart" component={WebsiteCart} />
          <Redirect from="/" exact to="/bot/shop" />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;