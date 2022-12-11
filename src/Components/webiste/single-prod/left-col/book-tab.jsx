import React, { Component } from 'react';
class BookTab extends Component {
    state = {  
        tab : 2,
    } 
    handle_tab = (tab) => {
        this.setState({ tab });
    }
    render() { 
        const { book } = this.props;
        return (
            <>
                <div className="tab-options">
                    <span
                        className={this.state.tab === 1 ? "tab tab-1 active-tab" : "tab tab-1"}
                        onClick={()=>{this.handle_tab(1)}}
                    >
                    درباره محصول
                    </span>
                    <span
                        className={this.state.tab === 2 ? "tab tab-2 active-tab" : "tab tab-2"}
                        onClick={()=>{this.handle_tab(2)}}
                    >
                        اطلاعات محصول
                    </span>
                </div>
                {
                    this.state.tab === 1 ?
                        <div className="about-tab tab-contents">
                            <p className='title-tab'>
                                توضیحات:
                            </p>
                            {book.details.map((text, i) => <p className="prod-details" key={i++}>{text}</p>)}
                        </div>
                        :
                        <div className="details-tab tab-contents">
                            <p className='title-tab'>
                                اطلاعات محصول
                            </p>
                            <ul>
                                <li className="tab-detail">
                                    <span className="title">
                                        نویسنده  :
                                    </span>
                                    <span className="content">
                                        {book.author}
                                    </span>
                                </li>
                                <li className="tab-detail">
                                    <span className="title">
                                        پایه  :
                                    </span>
                                    <span className="content">
                                        {book.book_year}
                                    </span>
                                </li>
                                <li className="tab-detail">
                                    <span className="title">
                                        رشته  :
                                    </span>
                                    <span className="content">
                                        {book.subject}
                                    </span>
                                </li>
                                <li className="tab-detail">
                                    <span className="title">
                                        سال چاپ  :
                                    </span>
                                    <span className="content">
                                        وارد نشده
                                    </span>
                                </li>
                                <li className="tab-detail">
                                    <span className="title">
                                        موضوع  :
                                    </span>
                                    <span className="content">
                                        {book.subject}
                                    </span>
                                </li>
                            </ul>
                        </div>
                }
            </>
        );
    }
}
 
export default BookTab;