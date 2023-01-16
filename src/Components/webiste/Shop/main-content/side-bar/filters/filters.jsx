import React, { Component } from 'react';
import axios from 'axios';
import el_by_id from "../../../../../functions/el-by-id";
import arrowDown from "../../../../../../assets/images/website/arrow-down-icon.png";
//! modal for each filter item is not created
class Filters extends Component {
    state = {
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
        publishers: false,
        clicked_id: {
            courses: [],
            grades: [],
            subjects: [],
            publishers: [],
        },
        open_g: false,
        open_c: false,
        open_s: false,
        open_p: false,
    } 
    componentDidMount() {
        axios
            .get("https://daryaftyar.ir/backend/api/pubs")
            .then((res) => {
                let publishers = [];
                res.data.forEach(p => {
                    publishers.push({...p , clicked : false})
                })
                this.setState({ publishers });
            })
            .catch(err => console.log(err));
    }
    handle_clicked = (kind, id) => {
        const clicked_id = this.state.clicked_id;
        const selected = this.state[kind];
        selected.forEach(s => {
            s.clicked = false;
        })
        if (clicked_id[kind].includes(id)) {
            clicked_id[kind] = clicked_id[kind].filter(i => i !== id);
        }
        else {
            clicked_id[kind].push(id);
        }
        clicked_id[kind].forEach(i => {
            selected.forEach(s => {
                if (s.id === i) {
                    s.clicked = true;
                }
            })
        });
        switch (kind) {
            case "courses":
                this.setState({ courses: selected });
                break;
            case "publishers":
                this.setState({ publishers: selected });
                break;
            case "grades":
                this.setState({ grades: selected });
                break;
            case "subjects":
                this.setState({ subjects: selected });
                break;
        }
        this.setState({ clicked_id });
    }
    handle_filters = (clicked_id) => {
        const books = this.props.original_books;
        let filterd_by_pubs = [];
        let filterd_by_sub = [];
        let filtered_by_course = [];
        let filtered_by_year = [];
        let filtered_book = [];
            
        let {
            publishers: clicked_publishers
            , subjects: clicked_subjects
            , grades: clicked_grades
            , courses: clicked_courses
        } = clicked_id;
        let {
            publishers,
            subjects,
            grades,
            courses,
        } = this.state;
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
        this.props.handle_needed_book(filtered_book);
        this.props.change_active_page(1);
    }
    open_modals = (kind) => {
        switch (kind) {
            case "c":
                const open_c = !this.state.open_c;
                this.setState({ open_c });
                break;
            case "p":
                const open_p = !this.state.open_p;
                this.setState({ open_p });
                break;
            case "g":
                const open_g = !this.state.open_g;
                this.setState({ open_g });
                break;
            case "s":
                const open_s = !this.state.open_s;
                this.setState({ open_s });
                break;
        }
    }
    empty_filters = () => {
        const clicked_id = {
            courses: [],
            grades: [],
            subjects: [],
            publishers: [],
        };
        const grades = this.state.grades;
        grades.forEach(i =>i.clicked = false);
        const publishers = this.state.publishers;
        publishers.forEach(i => i.clicked = false);

        const subjects = this.state.subjects;
        subjects.forEach(i => i.clicked = false);

        const courses = this.state.courses;
        courses.forEach(i => i.clicked = false);
        
        this.setState({ clicked_id, grades, courses, subjects, publishers });
        this.props.handle_needed_book(false);
        this.props.change_active_page(1);
    }
    render() { 
        return (
            <>
                <div className="filters_wrapper">
                    <div className="filter">
                        <span className="text">
                            پایه تحصیلی
                        </span>
                        <span className={this.state.open_g ? "arrow reverse" : "arrow"} onClick={() => { this.open_modals("g") }}>
                            <img src={arrowDown} alt="فلش به سمت پایین" />
                        </span>
                    </div>
                    {this.state.open_g ?
                        <ul className="sub-item">
                            {this.state.grades.map(item => <li
                                className={item.clicked ? "selected" : ""}
                                onClick={() => { this.handle_clicked("grades", item.id) }}
                                key={item.id}>{item.name}</li>)}
                        </ul>
                        :
                        <></>
                    }
                    <div className="filter">
                        <span className="text">
                            رشته تحصیلی
                        </span>
                        <span className={this.state.open_s ? "arrow reverse" : "arrow"} onClick={() => { this.open_modals("s") }}>
                            <img src={arrowDown} alt="فلش به سمت پایین" />
                        </span>
                    </div>
                    {this.state.open_s ?
                        <ul className="sub-item">
                            {this.state.subjects.map(item => <li
                                className={item.clicked ? "selected" : ""}
                                onClick={() => { this.handle_clicked("subjects", item.id) }}
                                key={item.id}>{item.name}</li>)}
                        </ul> :
                        <></>
                    }
                    <div className="filter">
                        <span className="text">
                            مولف
                        </span>
                        <span className={this.state.open_p ? "arrow reverse" : "arrow"} onClick={() => { this.open_modals("p") }}>
                            <img src={arrowDown} alt="فلش به سمت پایین" />
                        </span>
                    </div>
                    {this.state.open_p ?
                        <ul className="sub-item">
                            {this.state.publishers ?
                                this.state.publishers.map(item => <li
                                    className={item.clicked ? "selected" : ""}
                                    onClick={() => { this.handle_clicked("publishers", item.id) }}
                                    key={item.id}>{item.name}</li>)
                                :
                                <li> در حال بارگذاری</li>
                            }
                        </ul>
                        :
                        <></>
                    }
                    <div className="filter l">
                        <span className="text">
                            درس
                        </span>
                        <span className={this.state.open_c ? "arrow reverse" : "arrow"} onClick={() => { this.open_modals("c") }}>
                            <img src={arrowDown} alt="فلش به سمت پایین" />
                        </span>
                    </div>
                    {this.state.open_c ?
                        <ul className="sub-item">
                            {this.state.courses.map(item => <li
                                className={item.clicked ? "selected" : ""}
                                onClick={() => { this.handle_clicked("courses", item.id) }}
                                key={item.id}>{item.name}</li>)}
                        </ul>
                        :
                        <></>
                    }
                </div>
                <div className="filter-bts">
                    <span
                        onClick={()=>{this.empty_filters()}}
                        className="reset-filters">
                        حذف فیلتر ها
                    </span>
                    <span
                        onClick={()=>{this.handle_filters(this.state.clicked_id)}}
                        className="enable-filters">
                        اعمال فیلتر ها
                    </span>
                </div>
            </>
        );
    }
}
 
export default Filters;