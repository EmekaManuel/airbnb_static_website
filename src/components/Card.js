import React from 'react'
import rating from './rating.png';



const Card = (props) => {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "online") {
    badgeText = "Online"

  }








  return (
    <div className='card'>
      {badgeText && <div className='badge'>{badgeText}</div>}
       <div className='comps'>
       <img src={props.items.coverImg} alt="" className='card--image' />
        <div className='card-stats'>
            <img src={rating} alt="" className='card-rating'/>
            <span>{props.items.stats.rating}</span>
            <span className='grey'>({props.items.stats.reviewCount}) -</span>
            <span className='grey'>{props.items.location}</span>
        </div>
        <p className='title'>{props.items.title}</p>
        <p> From<span className='bold'> ${props.items.price}</span>/ person</p>
       </div>
    </div>
  )
}

export default Card