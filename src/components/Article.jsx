import React from "react";

function Article(props){
    return(
        <div className="article">
            <img src={props.imgSrc} alt="Article"/>
            <div className="articleContent">
                <p>{props.author}</p>
                <h4>{props.title}</h4>
                <div>{props.content}</div>
            </div>
        </div>
    );
}

export default Article;