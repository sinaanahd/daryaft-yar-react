import React from 'react';
import axios from 'axios';
const local_user = JSON.parse(sessionStorage.getItem("website_user")) ? JSON.parse(sessionStorage.getItem("website_user")) : false;
const local_books = JSON.parse(sessionStorage.getItem("website_books")) ? JSON.parse(sessionStorage.getItem("website_books")) : false;
const local_cart =  JSON.parse(sessionStorage.getItem("website_cart")) ? JSON.parse(sessionStorage.getItem("website_cart")) : false;
function withWebsiteData(Component) {
    return class withWebsiteData extends Component {
        state = {
            user: local_user ? local_user : false,
            books: local_books ? local_books : false,
            cart: local_cart ? local_cart : false,
            is_logged_in: true,
            active_single: false,
            pause: false,
            error: false,
        }
        componentDidMount() {
            this.get_user(341393410);
            this.get_books();
            this.get_cart(341393410);
            // if (!this.state.user) {
            // }
            // if (!this.state.books) {
            // }
            // if (!this.state.cart) {
            //     console.log("1")
            // }
        }
        get_user = (id) => {
            axios
                .get(`https://daryaftyar.ir/backend/api/user/${id}`)
                .then(res => {
                    const user = res.data;
                    this.setState({ user });
                    this.setState({ is_logged_in: true });
                    sessionStorage.setItem("website_user", JSON.stringify(user));
                })
                .catch(err => {
                    const { status } = err.response;
                    if (status === 404) {
                        this.make_guest_user();
                    }
                    else if (status === 500) {
                        console.log("server error");
                    }
                })
        }
        get_books = () => {
            axios
                .get(`https://daryaftyar.ir/backend/api/books`)
                .then(res => {
                    const books = res.data;
                    this.setState({ books });
                    sessionStorage.setItem("website_books", JSON.stringify(books));
                })
                .catch(err => {
                    alert(err.message)
                })
        }
        get_cart = (id) => {
            axios
                .get(`https://daryaftyar.ir/backend/api/cart/${id}`)
                .then(res => {
                    const cart = res.data;
                    this.setState({ cart });
                    sessionStorage.setItem("website_cart", JSON.stringify(cart));
                    console.log(cart);
                })
                .catch(err => {
                    alert(err.message)
                })
        }
        make_guest_user = () => {
            alert("new user request")
        }
        handle_active_signle = (book) => {
            this.setState({active_single : book});
        }
        add_to_cart = (id) => {
            const old_cart = { ...this.state.cart };
            const ids = old_cart.cart_items_ids;
            ids.push(id);
            this.update_cart(ids);
        }
        update_cart = (ids) => {
            this.setState({ pause: true });
            axios
                .patch(`https://daryaftyar.ir/backend/api/cart/${341393410}`, ids)
                .then(res => {
                    const cart = res.data;
                    this.setState({ cart });
                    this.setState({ pause: false });
                    sessionStorage.setItem("website_cart", JSON.stringify(cart));
                    this.setState({ err: false });
                    alert()
                })
                .catch(err => {
                    this.setState({ pause: false });
                    this.setState({ error: err.message });
                    setTimeout(() => {
                        this.setState({ error: false });
                    }, 2000)
                })
        }
        render() {
            return (
                <Component
                    {...this.props}
                    data={this.state}
                    user={this.state.user}
                    books={this.state.books}
                    cart={this.state.cart}
                    change_active={this.handle_active_signle}
                    add_to_cart = {this.add_to_cart}
                />
            );
        }
    }
}
export default withWebsiteData;