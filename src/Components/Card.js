import React from "react";
import './Card.css'

function Card(props)
{
    let badgeText

    if(props.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online")
    {
        badgeText = "Online"
    }

    return (
        <div className={`card-${props.id}`}>
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`/images/${props.img}`} alt="katie-zafaerez" className={`image-${props.id}`}/>
            <div className="card-stats">
                <img src="/images/star.png" alt="star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="paragraph">{props.title}</p>
            <p className="paragraph"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;