import React, { useEffect, useState } from 'react'
import styles from './Mark.module.scss'
import MarkImg from '../../Components/MarkImg/MarkImg'
import MarkTimeline from '../../Components/MarkTimeline/MarkTimeline'
const Mark = () => {
  const [item, setItem] = useState([
    {img : 'https://minhtoan.blob.core.windows.net/husc/4.jpg', 
      title : 'Thành lập khoa', content:' Ngày 13 tháng 12 năm 1994, Bộ Giáo Dục và Đào Tạo ra quyết định  thành lập Khoa Công nghệ thông tin tại Đại học Huế', year: '1994'},
    {img : 'https://minhtoan.blob.core.windows.net/husc/4.jpg', 
      title : 'Đào tạo cử nhân ngành CNTT', content:' Ngày 01 tháng 06 năm 1995, Chính thức đào tạo cử nhân ngành Công nghệ thông tin, trở thành 1 trong 6 khoa Công nghệ thông tin trọng điểm trên toàn quốc', year: '1995'},
    {img : 'https://minhtoan.blob.core.windows.net/husc/3.jpg', 
      title : 'Đào tạo thạc sĩ', content:'Đào tạo thạc sĩ chuyên ngành Khoa học máy tính được đưa vào hoạt động', year: '2000'},
    {img : 'https://minhtoan.blob.core.windows.net/husc/2.jpg', 
      title : 'Đào tạo tiến sĩ', content:'Khoa Công nghệ thông tin được giao trọng trách đào tạo tiến sĩ chuyên ngành Khoa học máy tính', year: '2010'},
    {img : 'https://minhtoan.blob.core.windows.net/husc/1.jpg', 
      title : 'Mở ngành mới', content:'Mở ngành đào tạo cử nhân Kỹ thuật phần mềm (cơ chế đặc thù)', year: '2018'},
   
  ])
  useEffect(()=> {
    document.querySelector('.app-footer').style.display = 'none'
    return () => {
      try {
        document.querySelector('.app-footer').style.display = 'block'
      } catch (error) {
        
      }
    }
  })
  return (
    <div className={styles.MarkContainer}>
      <h1>MỘT SỐ CỘT MỐC QUAN TRỌNG</h1>
      <div className={styles.ImgContainer}>
        {item.map((item) => (
          <MarkImg 
            content={item.content}
            title={item.title}
            img={item.img}
            year={item.year}/>
        ))}
      </div>
    </div>
  )
}

export default Mark