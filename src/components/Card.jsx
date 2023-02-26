import React from "react";


const Card = (props) => {

    return (

        <div>
            <img src={props.imgSrc} alt="" />
            <h3>{props.title}</h3>
            <h4>{props.desc}</h4>
            <a href={props.pgsrc} target="_blank"><button>View Page</button></a>
        </div>
    )
}

export default Card;