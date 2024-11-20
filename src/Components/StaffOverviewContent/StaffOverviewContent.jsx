import React from 'react'
import './staffoverviewcontent.css'

const StaffOverviewContent = () => {
  return (
<div className="content-right">
      <div className="content-right-image-wrapper">
        <img
          className="content-right-image"
          alt="Staff Visual 5"
          src={require('../../assets/img/school/DayE.jpg')}
        />
        <div className="content-right-description">
          <p className="content-right-text">
            Với sự phát triển không ngừng về đội ngũ, quy mô đào tạo và nghiên cứu khoa học (NCKH),
            hiện nay (năm 2023) Khoa có 26 viên chức và người lao động, trong đó 23 giảng viên với 06
            phó giáo sư tiến sĩ, 9 tiến sĩ, 10 thạc sĩ, 2 trợ giảng và 1 văn thư.
          </p>
        </div>
      </div>
      <div className="content-right-footer">
        <img
          className="content-footer-image"
          alt="Staff Visual 6"
          src={require('../../assets/img/school/DayH.jpg')}
        />
        <div className="content-footer-description">
          <p className="content-footer-text">
            Với bề dày 30 năm xây và phát triển, khoa đã đào tạo được số lượng lớn các cử nhân,
            thạc sĩ, tiến sĩ đang công tác trên mọi miền tổ quốc và thế giới, hướng tới đóng góp cho
            sự phát triển của đất nước và hội nhập quốc tế tích cực, sâu rộng.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StaffOverviewContent
