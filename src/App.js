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
import Yalda from './Components/campaign/yalda/yalda';
import OpenChest from './Components/campaign/yalda/chest-open/open-chest';
import FalPage from './Components/campaign/yalda/fal/fal';
import IncreaseToken from "./Components/campaign/yalda/increase-token/increase-token";
import Rules from './Components/campaign/yalda/rules/yalda-rules';
import Clogin from "./Components/campaign/yalda/logins/campaign-login";
import CampagingIntro from './Components/campaign/yalda/intro-page/intro';
import CSignUp from "./Components/campaign/yalda/logins/campaign-sign-up";
import Campagin from "./Components/campaign/yalda/boxes-page/boxes";
import PrizePage from './Components/campaign/yalda/fal/webite-fal';
import InviteFreinds from "./Components/campaign/yalda/invite-friends/invite-friends";
import YaldaRulesW from "./Components/campaign/yalda/rules-page/website-rules";
import NotFound from "./Components/webiste/404/not-found";
import CodePage from './Components/webiste/Login-SignUp/code/code';
import SignUp from "./Components/webiste/Login-SignUp/singUp/singup";
import FinalCartPage from './Components/webiste/final-cart/final-cart';
import Panel from './Components/webiste/panel/panel';
import PanelSettings from './Components/webiste/panel/panel-settings/panel-settings';
class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <React.Fragment>
        <Switch >
          {/* bot route */}
          <Route path="/bot/shop" component={Shop} />
          <Route path="/bot/home" component={Home} />
          <Route path="/bot/coin" component={Coin} />
          <Route path="/bot/buy-coin" component={AddCoin} />
          <Route path="/bot/wallet" component={Wallet} />
          <Route path="/bot/cart" component={Cart} />
          <Route path="/bot/cart-final" component={FinalCart} />
          <Route path="/bot/user-data" component={UserForm} />
          {/* zemestane */}
          {/* bot */}
          <Route path="/bot/yalda" component={Yalda} />
          <Route path="/bot/openChest" component={OpenChest} />
          <Route path="/bot/falPage" component={FalPage} />
          <Route path="/bot/increaseToken" component={IncreaseToken} />
          <Route path="/bot/rules" component={Rules} />
          {/* bot */}
          <Route path="/intro" component={CampagingIntro} />
          <Route path="/Clogin" component={Clogin} />
          <Route path="/CsingUp" component={CSignUp} />
          <Route path="/campaign" component={Campagin} />
          <Route path="/w-prize" component={PrizePage} />
          <Route path="/invite" component={InviteFreinds} />
          <Route path="/rules" component={YaldaRulesW} />
          {/* zemestane */}
          {/* website route */}
          <Route path="/home" component={HomePage} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/single-id/:id" component={SingleProdPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/cart" component={WebsiteCart} />
          <Route path="/verification-code" component={CodePage} />
          <Route path="/final-cart" component={FinalCartPage} />
          <Route path="/panel" component={Panel} />
          <Route path="/user-info" component={PanelSettings} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;