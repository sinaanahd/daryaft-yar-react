import React, { Component } from 'react';
class Errors extends Component {
    state = {  } 
    render() { 
        const {error} = this.props;
        return (
            <>
                {error ?
                    <div className="errors-wrapper">
                        متاسفانه ارور زیر رخ داده است :
                        <span className="err-message">
                            {error}
                        </span>
                    </div>
                    :
                    <></>
                }
            </>
        );
    }
}
 
export default Errors;