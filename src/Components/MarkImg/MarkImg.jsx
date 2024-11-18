import React from 'react'
import styles from './MarkImg.module.scss'
const MarkImg = () => {
  return (
    <div className={styles.MarkImgItem}>
        <div className={styles.img}>
            <img src="https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
        </div>
         <div className={styles.MarkImgDes}>
            <h2 className={styles.year}>MỞ NGÀNH MỚI</h2>
            <span className={styles.content}>ngayode_modules/sass-loader/dist/cjs.js <br />sass-loader ./node_modulesjs?<br />?ruleSet </span>
         </div>
    </div>
  )
}

export default MarkImg