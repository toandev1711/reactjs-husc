import React from 'react'
import styles from './OverInfo.module.scss'
import Slideshow from '../SlideShow/SlideShow';
const OverInfo = () => {
  const images = [
    "https://minhtoan.blob.core.windows.net/husc/1.jpg",
    "https://minhtoan.blob.core.windows.net/husc/2.jpg",
    "https://minhtoan.blob.core.windows.net/husc/3.jpg",
    "https://minhtoan.blob.core.windows.net/husc/4.jpg"

  ];
  return (
    <div className= {styles.overviewInfoContainer}>
      <div className= {styles.mainContentLeft}>
        <Slideshow images={images} interval={2000} />
        </div>
            <div className= {styles.mainContentRight}>
            <h1>TỔNG QUAN</h1>
            <span>Ngày <span style={{color: '#1148A5'}}>13/12/1994</span> Bộ Giáo dục và Đào <br/> 
            tạo ký quyết định thành lập khoa  <br/>
            Công nghệ Thông tin (CNTT) thuộc <br/>
            trường Đại học Khoa học - Đại học <br/>
            Huế, một trong sáu khoa CNTT trọng <br/>
            điểm trên toàn quốc. Tuy nhiên, khoa <br/>
            CNTT chính thức hoạt động từ ngày <br/>
            <span style={{color: '#1148A5'}}>01/06/1995</span> với 6 thành viên chuyển <br/>
            từ Bộ môn Toán Ứng dụng của Khoa <br/>
            Toán – Cơ – Tin học
            </span>
        </div>
    </div>
  )
}

export default OverInfo
