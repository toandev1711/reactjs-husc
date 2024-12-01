import React from 'react'
import styles from './detailtimeline.module.scss'
const DetailTimeline = ({time, day, month, year, content, place, position, imgSrc}) => {
  return (
    <div className = {styles.timeLineContainer} 
        style ={{flexDirection : position == 1 ? 'row' : 'row-reverse'}}>
        <div className= {styles.detailTimelineFirst}>
          <div className={styles.date}>
            {time && day ?(
              <>
                <span className={styles.first}>{time}</span>
                <span className={styles.second}>{day}</span>
              </>
            ):null}
            <span className={styles.third}>{month}</span>
            <span  className={styles.fourth}>{year}</span>
          </div>
          <img 
            src={imgSrc}
            className={styles.img} />
        </div>
        <div className= {styles.detailTimelineSecond}>
          <div className={styles.place}>
            {place}
          </div>
          <div className={styles.content}>
            <span>
              {content}
            </span>
          </div>
        </div>
    </div>
  )
}

export default DetailTimeline
