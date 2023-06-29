import React from "react";
import '../css/AuthorBtn.css';

const AuthorBtn = (props) => {
    return (
        <div className="author-btn">
            <p className="author-name">{props.authorName}</p>
            <p className="author-job">{props.authorJob}</p>
        </div>
    );
}

export default AuthorBtn;