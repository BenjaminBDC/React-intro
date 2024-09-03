import React from "react"

export default function Card(props)
{

    let badgeText
    if (props.openspots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online")
    {
        badgeText = "Online"
    }

    return (
        <div className="card">
            {badgeText && <div className="absolute bg-gray-500 m-1 text-xs">{badgeText}</div>}
            <img src={`/images/${props.coverImg}`} className="card--image w-32 rounded-lg" />
            <div className="card--stats">
                <img src="/images/star.png" className="card--star w-4" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}