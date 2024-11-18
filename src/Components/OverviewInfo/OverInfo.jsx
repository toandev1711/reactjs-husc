import React from 'react'
import styles from './OverInfo.module.scss'
import Slideshow from '../SlideShow/SlideShow';
const OverInfo = () => {
  const images = [
    "https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1731573818042-3237bbed7ce1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1731410612760-4d9ae680d5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
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
