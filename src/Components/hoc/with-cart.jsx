import React from 'react';
import axios from 'axios';
import stop_repeatation_in_addres from '../functions/stop-reapet-in-address';
import find_loc from '../functions/find-loc';
import get_telegram_data from '../functions/get-telegram-data';
function withCartData(Component) {
    const final_id = get_telegram_data();
    return class withCartData extends Component {
        state = {
            cart: JSON.parse(sessionStorage.getItem("cart")) ? JSON.parse(sessionStorage.getItem("cart")) : false,
            go_to: "",
            pause: false
        }
        componentDidMount() {
            axios
                .get(`https://daryaftyar.ir/backend/api/cart/${final_id}`)
                .then((res) => {
                    let cart = res.data;
                    this.setState({ cart });
                    //console.log(cart);
                })
                .catch(err => console.log(err));
        }
        handle_cart = (book) => {
            const old_cart = { ...this.state.cart };
            const ids = old_cart.cart_items_ids;
            ids.push(book.id);
            this.update_cart(ids)
        }
        handle_decrement = (book) => {
            const old_cart = { ...this.state.cart };
            const ids = old_cart.cart_items_ids;
            const index = ids.indexOf(book.id);
            ids.splice(index, 1);
            this.update_cart(ids)
        }
        handle_remove = (book) => {
            const old_cart = { ...this.state.cart };
            let ids = old_cart.cart_items_ids;
            ids = ids.filter(id => id !== book.id);
            this.update_cart(ids);
        }
        clear_cart = () => {
            const ids = [];
            this.update_cart(ids)
        }
        update_cart = (ids) => {
            this.setState({pause : true});
            axios   
                .patch(`https://daryaftyar.ir/backend/api/cart/${final_id}`, ids)
                .then(res => {
                    const cart = res.data;
                    this.setState({ cart });
                    this.setState({ pause: false });
                    sessionStorage.setItem("cart", JSON.stringify(cart));
                })
                .catch(err => console.log(err))
        }
        render() {
            return (
                <Component
                    {...this.props}
                    state={this.state}
                    cart_handler={this.handle_cart}
                    handle_decrement={this.handle_decrement}
                    handle_remove={this.handle_remove}
                    clear_cart={this.clear_cart}
                />
            );
        }
    }
}
export default withCartData;