import './staffleader.css'
import React from 'react'

const StaffLeader = () => {
  return (
    <div className="staff-box">
    <div className="staff-leader">
      <div className="leader-image-group">
        <div className="leader-image" aria-label="Leader Rectangle"></div>
        <div className="leader-image-secondary" aria-label="Secondary Leader Rectangle"></div>
        <img className="leader-image-secondary" alt="Secondary Rectangle" src={require('../../assets/img/school/background/bg1.png')} />
        <img className="leader-profile-image" alt="Leader Profile" src={require('../../assets/img/teachers/NguyenHoangHa.png')} />
      </div>

      <p className="leader-description">
        <span className="leader-name">Thầy Nguyễn Hoàng Hà,</span>
        <span className="leader-details">
          {" "}
          sinh năm 1976, là tiến sĩ chuyên ngành Khoa học Máy tính, hiện công
          tác tại Bộ môn{" "}
        </span>
        <span className="leader-department">Công nghệ Phần mềm</span>
        <span className="leader-details">
          , Khoa Công nghệ Thông tin, Trường Đại học Khoa học, Đại học Huế.
          Thầy có nhiều năm kinh nghiệm giảng dạy và nghiên cứu trong lĩnh vực
          Tin học, với 18 bài báo khoa học, 3 sách - giáo trình và 5 đề tài
          khoa học. Thầy Hà tốt nghiệp Đại học ngành Tin học vào năm 1999,
          hoàn thành Thạc sĩ năm 2005 và bảo vệ Tiến sĩ vào năm 2017.
        </span>
      </p>

      <div className="leader-title">THẦY TRƯỞNG KHOA</div>
    </div>
  </div>
  )
}

export default StaffLeader
