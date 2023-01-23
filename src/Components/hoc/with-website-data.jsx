import React from 'react';
import axios from 'axios';
const local_user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : false;
const local_books = JSON.parse(localStorage.getItem("website_books")) ? JSON.parse(localStorage.getItem("website_books")) : false;
const local_cart =  JSON.parse(localStorage.getItem("website_cart")) ? JSON.parse(localStorage.getItem("website_cart")) : false;
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
            if (this.state.user) {
                this.get_user(this.state.user.user_id);
                this.get_cart(this.state.user.user_id);
            }
            this.get_books();
        }
        get_user = (id) => {
            axios
                .get(`https://daryaftyar.ir/backend/api/user/${id}`)
                .then(res => {
                    const user = res.data;
                    this.setState({ user });
                    this.setState({ is_logged_in: true });
                    localStorage.setItem("user", JSON.stringify(user));
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
                    localStorage.setItem("website_books", JSON.stringify(books));
                })
                .catch(err => {
                    this.setState({ pause: false });
                    this.setState({ error: err.message });
                    setTimeout(() => {
                        this.setState({ error: false });
                    }, 2000)
                })
        }
        get_cart = (id) => {
            axios
                .get(`https://daryaftyar.ir/backend/api/cart/${id}`)
                .then(res => {
                    const cart = res.data;
                    this.setState({ cart });
                    localStorage.setItem("website_cart", JSON.stringify(cart));
                    //console.log(cart);
                })
                .catch(err => {
                    this.setState({ pause: false });
                    this.setState({ error: err.message });
                    setTimeout(() => {
                        this.setState({ error: false });
                    }, 2000)
                })
        }
        make_guest_user = () => {
            alert("new user request")
        }
        handle_active_signle = (book) => {
            this.setState({ active_single: book });
        }
        add_to_cart = (id) => {
            const old_cart = { ...this.state.cart };
            if (this.state.cart) {
                const ids = old_cart.cart_items_ids;
                ids.push(id);
                this.update_cart(ids);
            }
            else {
                window.location.pathname = "/login"
            }
        }
        update_cart = (ids) => {
            this.setState({ pause: true });
            axios
                .patch(`https://daryaftyar.ir/backend/api/cart/${this.state.user.user_id}`, ids)
                .then(res => {
                    const cart = res.data;
                    this.setState({ cart });
                    this.setState({ pause: false });
                    localStorage.setItem("website_cart", JSON.stringify(cart));
                    this.setState({ err: false });
                    
                })
                .catch(err => {
                    this.setState({ pause: false });
                    this.setState({ error: err.message });
                    setTimeout(() => {
                        this.setState({ error: false });
                    }, 2000)
                })
        }
        handle_quan = (id, sign) => {
            this.setState({ pause: true });
            const old_cart = { ...this.state.cart };
            if (this.state.cart) {
                const ids = old_cart.cart_items_ids;
                if (sign === "+") {
                    ids.push(id);
                }
                else if (sign === "-") {
                    const index = ids.indexOf(id)
                    ids.splice(index, 1);
                }
                this.update_cart(ids);
            }
            else {
                window.location.pathname = "/login";
            }
        }
        delete_item = (id) => {
            const old_cart = { ...this.state.cart };
            let ids = old_cart.cart_items_ids;
            ids = ids.filter(i => i !== id);
            this.update_cart(ids);
        }
        active_sort_item = (type, status, active) => {
            let books = [];
            this.setState({ pause: true });
            if (type !== active) {
                if (status === "normal") {
                    axios
                        .get("https://daryaftyar.ir/backend/api/books")
                        .then(res => {
                            books = res.data;
                            localStorage.setItem("website_books", JSON.stringify(books));
                            this.setState({ books, pause: false });
                        })
                        .catch(err => {
                            console.log(err)
                        });
                }
                else {
                    axios
                        .get(`https://daryaftyar.ir/backend/api/sortbooks/${status}`)
                        .then(res => {
                            books = res.data.books;
                            localStorage.setItem("website_books", JSON.stringify(books));
                            this.setState({ books, pause: false });
                        })
                        .catch(err => {
                            console.log(err)
                        });
                }
            }
            else {
                this.setState({ pause: false });
            }
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
                    add_to_cart={this.add_to_cart}
                    handle_quan={this.handle_quan}
                    delete_item={this.delete_item}
                    active_sort_item={this.active_sort_item}
                    get_cart={this.get_cart}
                    get_user={this.get_user}
                />
            );
        }
    }
}
export default withWebsiteData;