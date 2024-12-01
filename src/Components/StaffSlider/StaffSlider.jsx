import React, { useState } from 'react'
import style from './StaffSlider.module.scss'
import { ArrowBackIos, ArrowForwardIos} from '@mui/icons-material'
import Teachers from '../../assets/Teachers'
const StaffSlider = () => {
    const [index, setIndex] = useState(0)
    const handleTranfrom  = (signal) => {
    
        if(signal === 1)
        {
            if(index > 0){
                setIndex(index -1)
                console.log(index)
            }
        }
        else {
            if(index < Teachers.length / 2)
            {
                setIndex(index + 1)
                console.log(index)
            }
        }
    }
    return (
        <div className={style.parent}>
            <div className={style.btn}>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        handleTranfrom(1)}}>
                    <ArrowBackIos /></button>
                <button
                    onClick={
                        (e) => {
                            e.preventDefault()
                            handleTranfrom(2)
                        }}>
                    <ArrowForwardIos /></button>
            </div>
            <div 
                className={style.slider}
                style={{transform: `translateX(calc(-${index} * 100vw / 5))`}}>
                {
                    Teachers.map((item) => (
                        <div className={style.child}>
                            <img src={item.thumb} alt="" />
                            <h4>{item.name}</h4>
                        </div>
                        
                    ))
                }
            </div>
          
        </div>
    )
}

export default StaffSlider
