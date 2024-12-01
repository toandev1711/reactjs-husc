import React, { useState } from 'react'
import styles from './MarkImg.module.scss'
const MarkImg = ({img, content, title, year }) => {
  const [onMouse, setOnMouse] = useState(false)
  return (
    <div className={styles.MarkImgItem}>
        <div className={styles.img}>
            <img src = {img} alt="" />
        </div>
          <div className={styles.slideContainer}>
            <div className={styles.MarkImgDes}
              onMouseOver={() => {
                setOnMouse(true)
              }}
              onMouseLeave={() => {
                setOnMouse(false)
              }}>
              <h2 className={styles.year}>{title}</h2>
              <span className={styles.content}>{content}</span>
          </div>
          </div>
         
        <div className={onMouse === true ? styles.yearLineHover : styles.yearLine}>{year}</div>
    </div>
  )
}

export default MarkImg