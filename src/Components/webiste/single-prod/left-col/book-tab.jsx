import React, { Component } from "react";
import LittleLoading from "../../../reusables/little-loading";
import find_year from "../../../functions/find-year";
import find_subject from "../../../functions/find-subject";
class BookTab extends Component {
  state = {
    tab: 1,
  };
  handle_tab = (tab) => {
    this.setState({ tab });
  };
  componentDidMount() {
    //! there is a problem with states
  }
  render() {
    const { book } = this.props;
    return (
      <>
        <div className="tab-options">
          <span
            className={
              this.state.tab === 1 ? "tab tab-1 active-tab" : "tab tab-1"
            }
            onClick={() => {
              this.handle_tab(1);
            }}>
            درباره محصول
          </span>
          <span
            className={
              this.state.tab === 2 ? "tab tab-2 active-tab" : "tab tab-2"
            }
            onClick={() => {
              this.handle_tab(2);
            }}>
            اطلاعات محصول
          </span>
        </div>
        {this.state.tab === 1 ? (
          <div className="about-tab tab-contents">
            <p className="title-tab">توضیحات:</p>
            {book.details.map((text, i) => (
              <p className="prod-details" key={i++}>
                {text}
              </p>
            ))}
          </div>
        ) : (
          <div className="details-tab tab-contents">
            <p className="title-tab">اطلاعات محصول</p>
            <ul>
              <li className="tab-detail">
                <span className="title">نویسنده :</span>
                <span className="content author-wrapper">
                  {book ? (
                    book.author.map((a, i) => (
                      <React.Fragment key={i++}>
                        <span>{a}</span>/
                      </React.Fragment>
                    ))
                  ) : (
                    <LittleLoading />
                  )}
                </span>
              </li>
              <li className="tab-detail">
                <span className="title">پایه :</span>
                <span className="content multi-select">
                  {book ? (
                    book.book_year.map((year, i) => (
                      <span key={i++}>{find_year(year) + " / "}</span>
                    ))
                  ) : (
                    <LittleLoading></LittleLoading>
                  )}
                </span>
              </li>
              <li className="tab-detail">
                <span className="title">رشته :</span>
                <span className="content">
                  {book ? (
                    book.subject.map((subject, i) => (
                      <span key={i++}>{find_subject(subject) + " / "}</span>
                    ))
                  ) : (
                    <LittleLoading></LittleLoading>
                  )}
                </span>
              </li>
              {book.covering_exams.length !== 0 ? (
                <li className="tab-detail">
                  <span className="title"> پوشش آزمون ها :</span>
                  <span className="content">
                    {book.covering_exams.map((be, i) => (
                      <span key={i++}>{be}</span>
                    ))}
                  </span>
                </li>
              ) : (
                <></>
              )}
              {book.covers_konkur_in_and_out ? (
                <li className="tab-detail">
                  <span className="title">
                    تست های کنکور ( داخل و خارج ) سالهای اخیر :
                  </span>
                  <span className="content">
                    {book.covers_konkur_in_and_out}
                  </span>
                </li>
              ) : (
                <></>
              )}
              {book.example_descriptive_or_final_questions ? (
                <li className="tab-detail">
                  <span className="title">
                    نمونه سوال تشریحی ( یا امتحان نهایی) :
                  </span>
                  <span className="content">
                    {book.example_descriptive_or_final_questions}
                  </span>
                </li>
              ) : (
                <></>
              )}
              {book.ghat ? (
                <li className="tab-detail">
                  <span className="title">قطع :</span>
                  <span className="content">{book.ghat}</span>
                </li>
              ) : (
                <></>
              )}
              {book.have_tests ? (
                <li className="tab-detail">
                  <span className="title">تست :</span>
                  <span className="content">{book.have_tests}</span>
                </li>
              ) : (
                <></>
              )}
              {book.jeld_status ? (
                <li className="tab-detail">
                  <span className="title">وضعیت جلد :</span>
                  <span className="content">{book.jeld_status}</span>
                </li>
              ) : (
                <></>
              )}
              {book.marked_important_tests ? (
                <li className="tab-detail">
                  <span className="title">تست های مهم علامت دار :</span>
                  <span className="content">{book.marked_important_tests}</span>
                </li>
              ) : (
                <></>
              )}
              {book.page_count ? (
                <li className="tab-detail">
                  <span className="title">تعداد صفحات :</span>
                  <span className="content">{book.page_count}</span>
                </li>
              ) : (
                <></>
              )}
              {book.paper_matter ? (
                <li className="tab-detail">
                  <span className="title">جنس کاغذ :</span>
                  <span className="content">{book.paper_matter}</span>
                </li>
              ) : (
                <></>
              )}
              {book.publish_year ? (
                <li className="tab-detail">
                  <span className="title">سال چاپ :</span>
                  <span className="content">{book.publish_year}</span>
                </li>
              ) : (
                <></>
              )}
              {book.shabek ? (
                <li className="tab-detail">
                  <span className="title">شابک :</span>
                  <span className="content">{book.shabek}</span>
                </li>
              ) : (
                <></>
              )}
              {book.talifi_tests ? (
                <li className="tab-detail">
                  <span className="title">تست تالیفی :</span>
                  <span className="content">{book.talifi_tests}</span>
                </li>
              ) : (
                <></>
              )}
              {book.weight ? (
                <li className="tab-detail">
                  <span className="title">وزن :</span>
                  <span className="content">{book.weight}</span>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default BookTab;
