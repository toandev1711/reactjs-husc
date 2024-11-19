import React from 'react'
import './Staff.css'
const Staff = () => {
  return (
    <div className="staff-container">
      {/* Staff Overview Section */}
      <div className="staff-overview">
        <div className="staff-header">
          <div className="header-left-circle" />
          <div className="header-right-circle" />
          <img className="header-image-left" alt="Staff Visual 1" src={require('../../assets/img/teachers/NguyenThiThuyNhi.png')} />
          <img className="header-image-right" alt="Staff Visual 2" src={require('../../assets/img/teachers/NguyenDung.png')} />
        </div>
        <div className="staff-content">
          <div className="content-left">
            <div className="content-left-top-circle" />
            <div className="content-left-bottom-circle" />
            <img className="content-left-image" alt="Staff Visual 3" src={require('../../assets/img/teachers/DoanThiHongPhuoc.png')} />
            <img className="content-left-image-overlay" alt="Staff Visual 4" src={require('../../assets/img/teachers/NguyenDangBinh.png')} />
          </div>
          <div className="content-right">
            <div className="content-right-image-wrapper">
              <img className="content-right-image" alt="Staff Visual 5" src={require('../../assets/img/school/DayE.jpg')} />
              <div className="content-right-description">
                <p className="content-right-text">
                  Với sự phát triển không ngừng về đội ngũ, quy mô đào tạo và
                  nghiên cứu khoa học (NCKH), hiện nay (năm 2023) Khoa có 26
                  viên chức và người lao động, trong đó 23 giảng viên với 06 phó
                  giáo sư tiến sĩ, 9 tiến sĩ, 10 thạc sĩ, 2 trợ giảng và 1 văn
                  thư.11
                </p>
              </div>
            </div>
            <div className="content-right-footer">
              <img className="content-footer-image" alt="Staff Visual 6" src={require('../../assets/img/school/DayH.jpg')} />
              <div className="content-footer-description">
                <p className="content-footer-text">
                  Với bề dày 30 năm xây dựng và phát triển, khoa đã đào tạo được
                  số lượng lớn các cử nhân, thạc sĩ, tiến sĩ đang công tác trên
                  mọi miền tổ quốc và thế giới, hướng tới đóng góp cho sự phát
                  triển của đất nước và hội nhập quốc tế tích cực, sâu rộng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Box Section */}
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

      {/* List member section */}
      <div className="staff-member-list">
        <div className="staff-member">
          <div className="member-info">
            <div className="member-name">Thay Van Trung</div>
            <img 
            className="member-image"
            src={null}
            alt="Thay Van Trung"/>
          </div>
        </div>
        <div className="staff-member">
          <div className="member-info">
            <div className="member-name">Thay Thanh Tu</div>
            <img 
            className="member-image"
            src={null}
            alt="Thay Thanh Tu"/>
          </div>
        </div>
        <div className="staff-member">
          <div className="member-info">
            <div className="member-name">Thay Nguyen Phong</div>
            <img 
            className="member-image"
            src={null}
            alt="Thay Nguyen Phong"/>
          </div>
        </div>
        <div className="staff-member">
          <div className="member-info">
            <div className="member-name">Thay Dang Binh</div>
            <img 
            className="member-image"
            src={null}
            alt="Thay Dang Binh"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
