import React, { useEffect, useState } from "react";
import QuoteShow from "./QuoteShow";
import AuthorBtn from "./AuthorBtn";
import '../css/App.css';
import quotes from '../quotes.json';

const App = () => {
    const [quoteObject, setQuote] = useState({});
    const [showQuotes, setShowQuotes] = useState(false);

    /*This function generate random quote*/
    const getRandomQuote = () => {
        let quoteIndex = Math.round(Math.random() * (quotes.quotes.length - 1));
        setShowQuotes(false);
        setQuote(quotes.quotes[quoteIndex]);
    }

    /*This function returns all the quotes of the author*/
    const getAllAuthorQuotes = () => {
        let allQuotesByAuthorName = quotes.quotes.filter(quote => {
            return quote.author === quoteObject.author;
        })

        return allQuotesByAuthorName;
    };

    useEffect(() => {
        getRandomQuote();
    }, []);

    const onAuthorBtnClick = () => {
        setShowQuotes(true);
    }

    return (
        <div className="container">
            <button className="random-btn" onClick={getRandomQuote}>random</button>
            <div className="quote-show-container" onClick={onAuthorBtnClick} style={{display: showQuotes ? "none" : "block"}}>
                <QuoteShow quote={quoteObject.quote} />
                <AuthorBtn authorName={quoteObject.author} authorJob={quoteObject.job} />
            </div>
            <div className="all-quotes-of-author" style={{display: showQuotes ? "block" : "none"}}>
                {
                    getAllAuthorQuotes().map(quote => {
                        return <QuoteShow quote={quote.quote} />
                    })
                }
            </div>
        </div>
    );
}

export default App;