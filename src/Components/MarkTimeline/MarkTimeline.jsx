import React, { useState } from 'react'
import styles from './MarkTimeline.module.scss'
const MarkTimeline = () => {
    const [timeLine, setTimeLine] = useState([
        1994, 1995, 2000, 2021
    ])
    return (
        <div className={styles.MarkTimeline}>
            {timeLine.map((item)=>(
                <span>
                    {item}
                    <div></div>
                </span>
            ))}
        </div>
    )
}

export default MarkTimeline
