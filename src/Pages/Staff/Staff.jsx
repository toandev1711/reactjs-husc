import React from 'react'
import styles from './Staff.module.scss'
import AvatarGrid from '../../Components/AvatarGrid/AvatarGrid';
import StaffIntroContent from '../../Components/StaffIntroContent/StaffIntroContent';
import StaffLeader from '../../Components/StaffLeader/StaffLeader';
import StaffSlider from '../../Components/StaffSlider/StaffSlider';
const Staff = () => {
  const OvervieItem = [
    { content : 'Với sự phát triển không ngừng về đội ngũ, quy mô đào tạo và nghiên cứu khoa học (NCKH), hiện nay (năm 2023) Khoa có 26 viên chức và người lao động, trong đó 23 giảng viên với 06 phó giáo sư tiến sĩ, 9 tiến sĩ, 10 thạc sĩ, 2 trợ giảng và 1 văn thư.', 
      ImgSrc : 'https://plus.unsplash.com/premium_photo-1731624534286-adf5e9c78159?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { content : 'Với bề dày 30 năm xây dựng và phát triển, khoa đã đào tạo được số lượng lớn các cử nhân, thạc sĩ, tiến sĩ đang công tác trên mọi miền tổ quốc và thế giới, hướng tới đóng góp cho sự phát triển của đất nước và hội nhập quốc tế tích cực, sâu rộng.', 
      ImgSrc : 'https://plus.unsplash.com/premium_photo-1731624534286-adf5e9c78159?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  ];

  return (
    <div className={styles.staffContainer}>
        <div className={styles.staffOverview}>
            <AvatarGrid />
            <div className={styles.IntroOview}>
              {
                OvervieItem.map((item)=>(
                  <StaffIntroContent src={item.ImgSrc} content={item.content}/>
                ))
              }
            </div>
        </div>
        <div className={styles.staffLeader}>
            <StaffLeader />
        </div>
        <div className={styles.OtherStaff}>
          <h1>MỘT SỐ CÁN BỘ KHÁC</h1>
          <StaffSlider/>
        </div>
    </div>
  )
}

export default Staff
