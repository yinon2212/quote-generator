import React from "react";
import '../css/QuoteShow.css';

const QuoteShow = ({quote}) => {
    return (
        <div className="quote-show">
            <p className="quote-text">{quote}</p>
        </div>
    );
}

export default QuoteShow;