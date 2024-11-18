import React from 'react'
import './InfoCard.css'
const InfoCard = ({thumb, content}) => {
  return (
    <div className='infoCardContainer'>   
        <div>{thumb}</div>
        <span>{content}</span>
    </div>
  )
}

export default InfoCard
