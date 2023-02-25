import React, { Component } from "react";
import spilit_in_three from "../../../functions/spilit_in_three";
import eyeIcon from "../../../../assets/images/svg/eye-icon.svg";
import sampleImg from "../../../../assets/images/svg/sample-rectangle-book.svg";
class LastOrders extends Component {
  state = {};
  render() {
    return (
      <div className="latest-order g-item">
        <h3 className="title">آخرین سفارش ها</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>شماره‌سفارش</th>
                <th>محصول</th>
                <th>تاریخ</th>
                <th>قیمت‌کل</th>
                <th>وضعیت</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
              <tr>
                <td>929292123</td>
                <td className="imgs-td">
                  <span className="imgs-wrapper">
                    <img src={sampleImg} alt="" />
                  </span>
                </td>
                <td>
                  <span className="day">۱۲</span>
                  <span className="month">مهر</span>
                  <span className="year">۱۴۰۱</span>
                </td>
                <td>{spilit_in_three(200000)}</td>
                <td className="code-r code-g code-y">موفق</td>
                <td>
                  <img src={eyeIcon} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LastOrders;
