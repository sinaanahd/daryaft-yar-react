import React, { Component } from 'react';
import pubLogo from "../../../../assets/images/website/sample-pub-logo.png";
import BookTab from './book-tab';
class MainContent extends Component {
    state = {  } 
    render() { 
        const { book } = this.props;
        return (
            <div className="main-content">
                <div className="pub-details">
                    <span className="big-title pub-name">
                        نام ناشر : 
                    </span>
                    <h4 className="result">
                        {book.publisher}
                    </h4>
                    <span className="publisher-logo">
                        <img src={pubLogo} alt={book.publisher} />
                    </span>
                </div>
                <div className="book-details">
                    <span className="big-title details-name">
                        مشخصات : 
                    </span>
                    <div className="detalis-wrapper">
                        <ul className="detail">
                            <li className="result">
                                {book.name}
                            </li>
                            <li className="result">
                                {book.publisher}
                            </li>
                            <li className="result">
                                سری
                            </li>
                            <li className="result">
                                مولف
                            </li>
                            <li className="result">
                                {book.subject}
                            </li>
                        </ul>
                    </div>
                </div>
                <BookTab book={ book } />
            </div>

        );
    }
}
 
export default MainContent;