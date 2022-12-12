import React from 'react';
import axios from 'axios';
import stop_repeatation_in_addres from '../functions/stop-reapet-in-address';
import find_loc from '../functions/find-loc';
import el_by_id from '../functions/el-by-id';
function withBackEndData(Component) {
    const us_id = window.Telegram.WebApp.initData;
    let final_id = ""
    if (us_id === "") {
        final_id = "341393410";
    }
    else {
        final_id = us_id.split("%22")[2].split("3A")[1].split("%")[0];
    }
    return class withBackEndData extends Component {
        state = {
            user: JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user")) : false,
            books: JSON.parse(sessionStorage.getItem("books")) ? JSON.parse(sessionStorage.getItem("books")) : false,
            cart: JSON.parse(sessionStorage.getItem("cart")) ? JSON.parse(sessionStorage.getItem("cart")) : false,
            needed_book: [],
            searched_items: [],
            active_page: 1,
            filter_active: false,
            active_filter: "none",
            single_active: false,
            cart_active: false,
            active_single_book: false,
            search_open: false,
            active_sort_by: false,
            discount_active: false,
            re_url : false,
            sort_by: JSON.parse(sessionStorage.getItem('sort')) ? JSON.parse(sessionStorage.getItem('sort')) : "normal",
            selected_items: {
                active_publishers: JSON.parse(sessionStorage.getItem('selected_items')) ? JSON.parse(sessionStorage.getItem('selected_items')).active_publishers : [],
                active_subjects: JSON.parse(sessionStorage.getItem('selected_items')) ? JSON.parse(sessionStorage.getItem('selected_items')).active_subjects : [],
                active_grades: JSON.parse(sessionStorage.getItem('selected_items')) ? JSON.parse(sessionStorage.getItem('selected_items')).active_grades : [],
                active_course: JSON.parse(sessionStorage.getItem('selected_items')) ? JSON.parse(sessionStorage.getItem('selected_items')).active_course : [],
            },
            filters: JSON.parse(sessionStorage.getItem("filters")) ? JSON.parse(sessionStorage.getItem("filters")) : {
                publishers: false,
                courses: [
                    {
                        id: 1,
                        clicked: false,
                        name: "ادبیات فارسی"
                    },
                    {
                        id: 2,
                        clicked: false,
                        name: "عربی"
                    },
                    {
                        id: 3,
                        clicked: false,
                        name: "دین و زندگی"
                    },
                    {
                        id: 4,
                        clicked: false,
                        name: "زبان انگلیسی"
                    },
                    {
                        id: 5,
                        clicked: false,
                        name: "زیست شناسی"
                    },
                    {
                        id: 6,
                        clicked: false,
                        name: "ریاضیات تجربی"
                    },
                    {
                        id: 7,
                        clicked: false,
                        name: "هندسه و گسسته"
                    },
                    {
                        id: 8,
                        clicked: false,
                        name: "فیزیک"
                    },
                    {
                        id: 9,
                        clicked: false,
                        name: "شیمی"
                    },
                    {
                        id: 10,
                        clicked: false,
                        name: "فلسفه و منطق"
                    },
                    {
                        id: 11,
                        clicked: false,
                        name: "مشاوره"
                    },
                    {
                        id: 12,
                        clicked: false,
                        name: "زمین شناسی"
                    },
                    {
                        id: 13,
                        clicked: false,
                        name: "علوم فنون ادبی"
                    },
                    {
                        id: 14,
                        clicked: false,
                        name: "جامعه شناسی"
                    },
                    {
                        id: 15,
                        clicked: false,
                        name: "اقتصاد"
                    },
                    {
                        id: 16,
                        clicked: false,
                        name: "تاریخ و جغرافیا"
                    },
                    {
                        id: 17,
                        clicked: false,
                        name: "روانشناسی"
                    },
                    {
                        id: 18,
                        clicked: false,
                        name: "علوم اجتماعی"
                    },
                    {
                        id: 19,
                        clicked: false,
                        name: "سوالات متفرقه"
                    },
                    {
                        id: 20,
                        clicked: false,
                        name: "ریاضیات انسانی"
                    },
                    {
                        id: 21,
                        clicked: false,
                        name: "حسابان"
                    }],
                subjects: [
                    {
                        id: 0,
                        clicked: false,
                        name: "ریاضی"
                    },
                    {
                        id: 1,
                        clicked: false,
                        name: "تجربی"
                    },
                    {
                        id: 2,
                        clicked: false,
                        name: "انسانی"
                    },
                    {
                        id: 3,
                        clicked: false,
                        name: "هنر"
                    }],
                grades: [
                    {
                        id: 10,
                        clicked: false,
                        name: "دهم"
                    },
                    {
                        id: 11,
                        clicked: false,
                        name: "یازدهم"
                    },
                    {
                        id: 12,
                        clicked: false,
                        name: "دوازدهم"
                    },
                    {
                        id: 18,
                        name: "کنکور"
                    },
                    {
                        id: 0,
                        clicked: false,
                        name: "فارغ التحصیل"
                    }],
            },
            null_books: [
                {
                    id: 1,
                    name: "",
                    discounted_price: "",
                    img_url: '',
                    publisher: "",
                    price: 0,
                },
                {
                    id: 2,
                    name: "",
                    discounted_price: "",
                    img_url: '',
                    publisher: "",
                    price: 0,
                },
                {
                    id: 3,
                    name: "",
                    discounted_price: "",
                    img_url: '',
                    publisher: "",
                    price: 0,
                },
                {
                    id: 4,
                    name: "",
                    discounted_price: "",
                    img_url: '',
                    publisher: "",
                    price: 0,
                },
            ],
            pause: false,
            coin_url: "",
            coin_amount: [
                { amount: 50, price: 5000 },
                { amount: 150, price: 9000 },
                { amount: 500, price: 19000 }
            ],
            selected_coin : 50
        }
        componentDidMount() {
            //console.log(JSON.parse(sessionStorage.getItem("address")) , null);
            axios
                .get("https://daryaftyar.ir/storeV2/books")
                .then((res) => {
                    let books = res.data;
                    //let localBooks = JSON.parse(sessionStorage.getItem("books"));
                    if (this.state.sort_by === "normal") {
                        sessionStorage.setItem("books", JSON.stringify(books));
                        localStorage.setItem("sina", JSON.stringify(books));
                        this.setState({ books });
                    }
                    // console.log(res.data)
                })
                .catch(err => console.log(err));
            axios
                .get(`https://daryaftyar.ir/storeV2/cart/${final_id}`)
                .then((res) => {
                    let cart = res.data;
                    sessionStorage.setItem("cart", JSON.stringify(cart));
                    this.setState({ cart });
                    localStorage.setItem("sina2", JSON.stringify(cart));
                    //console.log(cart);
                })
                .catch(err => console.log(err));
            axios
                .get("https://daryaftyar.ir/storeV2/pubs")
                .then((res) => {
                    let publishers = res.data;
                    const filters = { ...this.state.filters }
                    filters.publishers = [...publishers]
                    this.setState({ filters });
                })
                .catch(err => console.log(err));
            axios
                .get(`https://daryaftyar.ir/storeV2/user/${final_id}`)
                .then((res) => {
                    let user = res.data;
                    this.setState({ user });
                    sessionStorage.setItem("user", JSON.stringify(user));
                    //console.log(user)
                })
                .catch((err) => console.log(err.message));
        }
        handle_filter_state = (state) => {
            this.setState({ active_filter: state , filter_active : true});
        }
        handle_click = (item) => {
            const filters = { ... this.state.filters };
            const selected_items = { ...this.state.selected_items }
            if (this.state.active_filter === "pub") {
                const publishers = [...filters.publishers];
                const index = publishers.indexOf(item);
                let active_publishers = selected_items.active_publishers;
                if (!active_publishers.includes(item.id)) {
                    active_publishers.push(item.id);
                }
                else {
                    const index = active_publishers.indexOf(item.id)
                    active_publishers.splice(index , 1);
                }
                publishers[index].clicked = !item.clicked;

            }
            else if (this.state.active_filter === "sub") {
                const subjects = [...filters.subjects];
                const index = subjects.indexOf(item);
                let active_subjects = selected_items.active_subjects;
                if (!active_subjects.includes(item.id)) {
                    active_subjects.push(item.id);
                }
                else {
                    const index = active_subjects.indexOf(item.id)
                    active_subjects.splice(index , 1);
                }
                subjects[index].clicked = !item.clicked;
            }
            else if (this.state.active_filter === "gra") {
                const grades = [...filters.grades];
                const index = grades.indexOf(item);
                let active_grades = selected_items.active_grades;
                if (!active_grades.includes(item.id)) {
                    active_grades.push(item.id);
                }
                else {
                    const index = active_grades.indexOf(item.id);
                    active_grades.splice(index , 1);
                }
                grades[index].clicked = !item.clicked;
            }
            else if (this.state.active_filter === "cou") {
                const courses = [...filters.courses];
                const index = courses.indexOf(item);
                let active_course = selected_items.active_course;
                if (!active_course.includes(item.id)) {
                    active_course.push(item.id);
                }
                else {
                    const index = active_course.indexOf(item.id);
                    active_course.splice(index , 1);
                }
                courses[index].clicked = !item.clicked;
            }
            this.setState({ filters });
            this.setState({ selected_items });
            this.session_filter();
        }
        session_filter = () => {
            sessionStorage.setItem("filters", JSON.stringify(this.state.filters));
            sessionStorage.setItem("selected_items", JSON.stringify(this.state.selected_items));
        }
        handle_destination = () => {
            const address = this.state.address;
            const splited = address.split("/");
            //console.log(splited, address);
            const go_to = splited[splited.length - 2] ? ("/bot-shop/" + splited[splited.length - 1]) : "/bot-shop/shop";
            this.setState({ go_to });
        }
        open_single_book = (book) => {
            let active_single_book = book;
            this.setState({ active_single_book, single_active: true });
        }
        handle_cart = (book) => {
            const old_cart = { ...this.state.cart };
            const ids = old_cart.cart_items_ids;
            //console.log(this.state.single_active)
            if ((!ids.includes(book.id)) && (!this.state.single_active)) {
                this.setState({ cart_active: true });
            }
            ids.push(book.id);
            this.update_cart(ids);
        }
        handle_decrement = (book) => {
            const old_cart = { ...this.state.cart };
            const ids = old_cart.cart_items_ids;
            const index = ids.indexOf(book.id);
            ids.splice(index, 1);
            this.update_cart(ids);
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
            this.setState({ pause: true });
            axios   
                .patch(`https://daryaftyar.ir/storeV2/cart/${final_id}`, ids)
                .then(res => {
                    const cart = res.data;
                    this.setState({ cart });
                    this.setState({ pause: false });
                    sessionStorage.setItem("cart", JSON.stringify(cart));
                })
                .catch(err => console.log(err))
        }
        handle_search = (value) => {
            //console.log(value.length)
            const searched_items = [];
            //this.setState({ searched_items : [] });
            const books = this.state.books;
            if (value.length > 2) {
                books.forEach(book => {
                    //console.log(book)
                    if (book.name.includes(value)) { 
                        searched_items.push(book);
                    }
                });
            }
            // searched_items.push(books[1]);
            this.setState({ searched_items });
            //console.log(searched_items)
        }
        search_focus = (e) => {
            const searched_items = [];
            this.setState({ search_open: true });
        }
        search_focus_out = (e) => {
            const searched_items = [];
            setTimeout(() => {
                this.setState({ search_open: false });
            } , 100)
        }
        active_sort = () => {
            //alert()
            this.setState({ active_sort_by: true });
        }
        handle_sort = (type) => {
            this.setState({ pause: true });
            switch (type) {
                case "normal":
                    this.active_sort_item("normal" ,"normal")
                    break;
                case "least":
                    this.active_sort_item("least" , "price");
                    break;
                case "most":
                    this.active_sort_item("most" , "-price");
                    break;
                case "loved":
                    this.active_sort_item("loved" , "-buys_count");
                    break;
            }
        }
        active_sort_item = (type , status) => {
            const active_sort = this.state.sort_by;
            let books = [];
            sessionStorage.setItem("sort", JSON.stringify(type));
            if (type !== active_sort) {
                if (status === "normal") {
                    axios
                        .get("https://daryaftyar.ir/storeV2/books")
                        .then(res => {
                            books = res.data;
                            sessionStorage.setItem("books", JSON.stringify(books));
                            this.setState({ books });
                            this.setState({ pause: false });
                            this.setState({ sort_by: type });
                        })
                        .catch(err => console.log(err));
                }
                else {
                    axios
                        .get(`https://daryaftyar.ir/storeV2/sortbooks/${status}`)
                        .then(res => {
                            books = res.data.books;
                            sessionStorage.setItem("books", JSON.stringify(books));
                            this.setState({ books });
                            this.setState({ pause: false });
                            this.setState({ sort_by: type });
                        })
                        .catch(err => console.log(err));
                }
            }
            else {
                this.setState({ pause: false });
            }
        }
        handle_popup_back = (which) => {
            if (which === "filters") {
                this.setState({ filter_active: false });
                this.handle_filter();
            }
            else if (which === "single-prod") {
                this.setState({ single_active: false });
            }
            else if (which === "pop-up-cart") {
                this.setState({ cart_active: false });
            }
            else if (which === "sort-pop-up") {
                this.setState({ active_sort_by: false });
            }
            else if (which === "discount-pop-up") {
                this.setState({ discount_active: false });
            }
        }
        handle_filter = () => {
            let filterd_by_pubs = [];
            let filterd_by_sub = [];
            let filtered_by_course = [];
            let filtered_by_year = [];
            let filtered_book = [];
            const books = this.state.books;
            
            let {
                active_publishers: clicked_publishers
                , active_subjects: clicked_subjects
                , active_grades: clicked_grades
                , active_course: clicked_courses
            } = this.state.selected_items;
            let {
                publishers,
                subjects,
                grades,
                courses,
            } = this.state.filters
            clicked_publishers.forEach(cp => {
                filterd_by_pubs = filterd_by_pubs.concat(books.filter(b => b.publisher === el_by_id(publishers, cp).name));
            });
            // find all books with selected subhject
            clicked_subjects.forEach(sub => {
                filterd_by_sub = filterd_by_sub.concat(books.filter(b => b.subject === el_by_id(subjects, sub).id));
            });
            // find all grades with selected grades
            clicked_grades.forEach(sub => {
                filtered_by_year = filtered_by_year.concat(books.filter(b => b.book_year === el_by_id(grades, sub).id));
            });
            // find all books with selected course
            clicked_courses.forEach(course => {
                filtered_by_course = filtered_by_course.concat(books.filter(b => b.course === el_by_id(courses, course).id));
            });
            // extract the ids of found books by each filter
            let ids_by_pub = [];
            filterd_by_pubs.forEach(b => ids_by_pub.push(b.id));
            let ids_by_sub = [];
            filterd_by_sub.forEach(b => ids_by_sub.push(b.id));
            let ids_by_year = [];
            filtered_by_year.forEach(b => ids_by_year.push(b.id));
            let ids_by_course = [];
            filtered_by_course.forEach(b => ids_by_course.push(b.id));
            //console.log(ids_by_course);

            // gathering final ids
            let final_ids = ids_by_pub.concat(ids_by_sub, ids_by_year, ids_by_course);
            //console.log(final_ids);
            //operating as and
            // if all 4 are selected the id should be repeated 3 times
            if (
                (
                    (ids_by_pub.length !== 0)
                    &&
                    (ids_by_sub.length !== 0)
                    &&
                    (ids_by_year.length !== 0)
                    &&
                    (ids_by_course.length !== 0)
                )
            ) {
                const my_count = {};
                final_ids.map(id => toString(id));
                final_ids.forEach(element => {
                    my_count[element] = (my_count[element] || 0) + 1;
                });
                let obj_id = [];
                for (const key in my_count) {
                    if (my_count[key] === 4) {
                        obj_id.push(key);
                    }
                }
                obj_id = obj_id.map(id => parseInt(id));
                obj_id.forEach(id => {
                    filtered_book = filtered_book.concat(books.filter(b => b.id === id));
                })
            }
            // if 3 fields are selected
            else if (
                (((ids_by_pub.length !== 0) && (ids_by_sub.length !== 0)) && (ids_by_year.length !== 0))
                ||
                (((ids_by_pub.length !== 0) && (ids_by_sub.length !== 0)) && (ids_by_course.length !== 0))
                ||
                (((ids_by_course.length !== 0) && (ids_by_sub.length !== 0)) && (ids_by_year.length !== 0))
                ||
                (((ids_by_pub.length !== 0) && (ids_by_course.length !== 0)) && (ids_by_year.length !== 0))
            ) {
                const my_count = {};
                final_ids.map(id => toString(id));
                final_ids.forEach(element => {
                    my_count[element] = (my_count[element] || 0) + 1;
                });
                let obj_id = [];
                for (const key in my_count) {
                    if (my_count[key] === 3) {
                        obj_id.push(key);
                    }
                }
                obj_id = obj_id.map(id => parseInt(id));
                obj_id.forEach(id => {
                    filtered_book = filtered_book.concat(books.filter(b => b.id === id));
                })
            }
            // if two of the fields are selected the id should be repeated 2 times
            else {
                if (
                    ((ids_by_pub.length !== 0) && (ids_by_sub.length !== 0))
                    ||
                    ((ids_by_year.length !== 0) && (ids_by_pub.length !== 0))
                    ||
                    ((ids_by_year.length !== 0) && (ids_by_sub.length !== 0))
                    ||
                    ((ids_by_year.length !== 0) && (ids_by_course.length !== 0))
                    ||
                    ((ids_by_course.length !== 0) && (ids_by_sub.length !== 0))
                    ||
                    ((ids_by_pub.length !== 0) && (ids_by_course.length !== 0))
                ) {
                    const my_count = {};
                    final_ids.map(id => toString(id));
                    final_ids.forEach(element => {
                        my_count[element] = (my_count[element] || 0) + 1;
                    });
                    let obj_id = [];
                    for (const key in my_count) {
                        if (my_count[key] === 2) {
                            obj_id.push(key);
                        }
                    }
                    obj_id = obj_id.map(id => parseInt(id));
                    //console.log(obj_id);
                    obj_id.forEach(id => {
                        filtered_book = filtered_book.concat(books.filter(b => b.id === id));
                    })
                }
                // if only one is clicked we should render according to the one set of ids which all are unique
                else if (
                    (ids_by_pub.length !== 0)
                    ||
                    (ids_by_sub.length !== 0)
                    ||
                    (ids_by_year.length !== 0)
                    ||
                    (ids_by_course.length !== 0)
                ) {
                    final_ids.forEach(id => {
                        filtered_book = filtered_book.concat(books.filter(b => b.id === id));
                    });
                }
            }
            this.setState({ needed_book: filtered_book });
        }
        close_web_app = () => {
            localStorage.clear();
            setTimeout(() => {
                window.Telegram.WebApp.close();
            }, 1000);
        }
        handle_coin_amount = (amount) => {
            this.setState({ pause: true });
            this.setState({selected_coin : amount});
            this.buy_coin(amount);
        }
        buy_coin = (amount) => {
            axios
                .get(`https://daryaftyar.ir/storeV2/buy_coin/id:${final_id}-amount:${amount}`)
                .then(res => {
                    const coin_url = res.data.url_to_pay;
                    this.setState({coin_url})
                    this.setState({ pause: false });
                })
                .catch(err => console.log(err));
        }
        active_discount_pop_up = () => {
            this.setState({discount_active:true});
        }
        handle_discount = (code) => {
            this.setState({ pause: true });
            axios
                .patch(`https://daryaftyar.ir/storeV2/cart_summary/${final_id}`, { "dis_code": code })
                .then(res => {
                    const cart = { ...this.state.cart };
                    cart.cart_summary = res.data;
                    sessionStorage.setItem("cart", JSON.stringify(cart));
                    this.setState({ cart });
                    axios
                    .get(`https://daryaftyar.ir/storeV2/payrequest/${final_id}`)
                    .then(res => {
                        this.setState({ pause: false });
                        this.setState({ re_url: res.data.url_to_pay });
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err.message))
        }
        render() {
            return (
                <Component
                    {...this.props}
                    state={this.state}
                    filterFunc={this.handle_filter_state}
                    clickHandler={this.handle_click}
                    go_to={this.handle_destination}
                    final_id={final_id}
                    open_single_book={this.open_single_book}
                    cart_handler={this.handle_cart}
                    handle_decrement={this.handle_decrement}
                    handle_search={this.handle_search}
                    search_focus={this.search_focus}
                    search_focus_out={this.search_focus_out}
                    back={this.handle_popup_back}
                    sort={this.handle_sort}
                    active_sort={this.active_sort}
                    handle_remove={this.handle_remove}
                    clear_cart={this.clear_cart}
                    close_web_app={this.close_web_app}
                    handle_coin={this.handle_coin_amount}
                    handle_discount_pop_up={this.active_discount_pop_up}
                    handle_discount={this.handle_discount}
                />
            );
        }
    }
}
export default withBackEndData;