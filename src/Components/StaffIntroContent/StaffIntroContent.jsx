import React from 'react'
import style from './StaffIntroContent.module.scss'
const StaffIntroContent = ({content, src}) => {
  return (
    <div className={style.container}>
        <img src= {src} alt="" />
        <p>
          {content}
        </p>
    </div>
  )
}

export default StaffIntroContent
