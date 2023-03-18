import axios from "axios";
import React, { Component } from "react";
import LittleLoading from "../../../reusables/little-loading";
import userIcon from "../../../../assets/images/svg/user-icon.svg";
class StudentsDataFrom extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
  }
  state = {
    send_obj: {
      year: -1,
      subject: -1,
    },
    result: {
      show: false,
      text: "",
      kind: "",
    },
    pause: false,
  };
  submit_user = () => {
    this.setState({ pause: true });
    const subject = this.myRef.current.selectedIndex - 1;
    const year_node = this.myRef2.current.selectedIndex;
    let year = "";
    switch (year_node) {
      case 0:
        year = -1;
        break;
      case 1:
        year = 10;
        break;
      case 2:
        year = 11;
        break;
      case 3:
        year = 12;
        break;
      case 4:
        year = 18;
        break;
      case 5:
        year = 0;
        break;
    }
    const { user } = this.props;
    const send_obj = { ...this.state.send_obj };
    send_obj.year = year;
    send_obj.subject = subject;
    if (send_obj.year === -1) {
      send_obj.year = user.year;
    }
    if (send_obj.subject === -1) {
      send_obj.subject = user.subject;
    }
    console.log(send_obj);
    // .patch(
    //   `https://daryaftyar.ir/backend/api/user_year_and_subject/${user.user_id}`,
    //   send_obj
    // )
    axios
      .patch(
        `https://daryaftyar.ir/backend/api/user_year_and_subject/${user.user_id}`,
        send_obj
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
        user.year = data.year;
        user.subject = data.subject;
        this.props.change_user(user);
        const result = {
          show: true,
          text: "اطلاعات با موفقیت ذخیره شد",
          kind: "s",
        };
        this.setState({
          pause: false,
          result,
        });
        setTimeout(() => {
          this.setState({ result: false });
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        const result = {
          show: true,
          text: "مشکلی پیش آمده دوباره تلاش کنید",
          kind: "f",
        };
        this.setState({
          pause: false,
          result,
        });
        setTimeout(() => {
          this.setState({ result: false });
        }, 3000);
      });
  };
  render() {
    return (
      <div className="student-data">
        <h3 className="title">اطلاعات تحصیلی</h3>
        <div className="forms">
          <span className="subject selects">
            <img src={userIcon} />
            <select ref={this.myRef}>
              <option value={-1}>رشته تحصیلی</option>
              <option value={0}>ریاضی</option>
              <option value={1}>تجربی</option>
              <option value={2}>انسانی</option>
              <option value={3}>هنر</option>
            </select>
          </span>

          <span className="grade selects">
            <img src={userIcon} />
            <select ref={this.myRef2}>
              <option value={-1}>پایه تحصیلی</option>
              <option value={10}>دهم</option>
              <option value={11}>یازدهم</option>
              <option value={12}>دوازدهم</option>
              <option value={18}>کنکور</option>
              <option value={0}>فارغ التحصیل</option>
            </select>
          </span>
        </div>
        {!this.state.pause ? (
          <span
            className="submit"
            onClick={() => {
              this.submit_user();
            }}>
            ثبت تغییرات
          </span>
        ) : (
          <span className="submit">
            <LittleLoading />
          </span>
        )}
        {this.state.result.show ? (
          <span
            className={
              this.state.result.kind === "f" ? "y-s-result f" : "y-s-result"
            }>
            {this.state.result.text}
          </span>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default StudentsDataFrom;
