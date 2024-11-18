import React from 'react'
import styles from './Mark.module.scss'
import MarkImg from '../../Components/MarkImg/MarkImg'
import MarkTimeline from '../../Components/MarkTimeline/MarkTimeline'
const Mark = () => {
  return (
    <div className={styles.MarkContainer}>
      <div className={styles.ImgContainer}>
        <MarkImg /><MarkImg />
        <MarkImg /><MarkImg />
      </div>
      <MarkTimeline />
    </div>
  )
}

export default Mark
