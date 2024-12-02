import React from 'react'
import styles from './OverInfo.module.scss'
import Slideshow from '../SlideShow/SlideShow';
const OverInfo = () => {
  const images = [
    "https://minhtoan.blob.core.windows.net/husc/1.jpg",
    "https://minhtoan.blob.core.windows.net/husc/2.jpg",
    "https://minhtoan.blob.core.windows.net/husc/3.jpg",
    "https://minhtoan.blob.core.windows.net/husc/4.jpg",
    "https://minhtoan.blob.core.windows.net/husc/phonghoc.jpg"

  ];
  return (
    <div className= {styles.overviewInfoContainer}>
      <div className= {styles.mainContentLeft}>
        <Slideshow images={images} interval={2000} />
        </div>
            <div className= {styles.mainContentRight}>
            <h1>TỔNG QUAN</h1>
            <span>Ngày <span style={{color: '#1148A5'}}>13/12/1994</span> Bộ Giáo dục và Đào  
            tạo ký quyết định thành lập khoa  
            Công nghệ Thông tin (CNTT) thuộc 
            trường Đại học Khoa học - Đại học 
            Huế, một trong sáu khoa CNTT trọng 
            điểm trên toàn quốc. Tuy nhiên, khoa 
            CNTT chính thức hoạt động từ ngày 
            <span style={{color: '#1148A5'}}>01/06/1995</span> với 6 thành viên chuyển 
            từ Bộ môn Toán Ứng dụng của Khoa 
            Toán – Cơ – Tin học
            </span>
        </div>
    </div>
  )
}

export default OverInfo
