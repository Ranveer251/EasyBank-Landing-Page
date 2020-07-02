import React from "react";

function Card(props){
    return(
        <div className="card">
            {<props.image />}
            <h2>{props.heading}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;