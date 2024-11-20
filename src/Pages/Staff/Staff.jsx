
import React, { useState } from 'react'
import './Staff.css'
import StaffLeader from '../../Components/StaffLeader/StaffLeader';
import StaffImgThumb from '../../Components/StaffImgThumb/StaffImgThumb';
import StaffOverviewContent from '../../Components/StaffOverviewContent/StaffOverviewContent';
const Staff = () => {
  const [selectedMember, setSelectedMember] = useState(0);
    // Danh sách giảng viên
    const members = [
      {
          name: "Nguyễn Văn Trung",
          image: require('../../assets/img/teachers/NguyenVanTrung.png'),
          researchAreas: [
              "Cấu trúc dữ liệu và thuật toán",
              "Web ngữ nghĩa",
              "Lập trình song song & phân tán",
              "Khai phá dữ liệu",
          ],
          teachingExperience: [
              "Ngôn ngữ lập trình C, C++",
              "Ngôn ngữ mô hình hoá thống nhất UML",
              "Phân tích và thiết kế hướng đối tượng",
              "Phát triển ứng dụng với .NET Framework",
          ],
      },
      {
        name: "Võ Thanh Tú",
        image: require('../../assets/img/teachers/VoThanhTu.png'),
        researchAreas: [
            "Đánh giá hiệu năng mạng",
            "kỹ thuật định tuyến trên mạng quang và không dây.",
            "Lĩnh vực truyền thông",
        ],
        teachingExperience: [
            "Đánh giá hiệu năng mạng",
            "Mạng MANET",
            "Mạng máy tính",
            "Định tuyến và an toàn thông tin trên mạng",
        ],
    },
    {
      name: "Nguyễn Mậu Hân",
      image: require('../../assets/img/teachers/NguyenMauHan.png'),
      researchAreas: [
          "Cơ sở dữ liệu phân tán, song song",
          "Công nghệ phần mềm",
          "Tính toán lưới và tính toán song song",
          "Điện toán đám mây",
      ],
      teachingExperience: [
          "Phân tích thiết kế hệ thống thông tin",
          "Quản trị dự án phần mềm",
          "Cơ sở dữ liệu phân tán",
          "Xử lý song song và phân tán",
      ],
  },
      {
          name: "Nguyễn Đăng Bình",
          image: require('../../assets/img/teachers/NguyenDangBinh.png'),
          researchAreas: [
              "Khoa học máy tính",
              "Công nghệ thông tin",
          ],
          teachingExperience: [
              "Lý thuyết nhận dạng",
              "Học máy",
              "Xử lý ánh số",
          ],
      },
  ];

  const handleSelectMember = (index) => {
      setSelectedMember(index);
  };

  const selected = members[selectedMember];

  return (
    <div className="staff-container">
      <div className='staff-overview'>
        <StaffImgThumb/>
        <StaffOverviewContent/>
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
                  Với bề dày 30 năm xây và phát triển, khoa đã đào tạo được
                  số lượng lớn các cử nhân, thạc sĩ, tiến sĩ đang công tác trên
                  mọi miền tổ quốc và thế giới, hướng tới đóng góp cho sự phát
                  triển của đất nước và hội nhập quốc tế tích cực, sâu rộng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StaffLeader/>
      <div className="staff-member-list">
            {/* Tiêu đề */}
            <div className="staff-title">MỘT SỐ CÁN BỘ KHÁC</div>
            {/* Thông tin chi tiết của giảng viên được chọn */}
            <div className="staff-detail-container">
                <div className="staff-profile">
                    <img
                        className="staff-image"
                        src={selected.image}
                        alt={selected.name}
                    />
                    <div className="staff-info">
                        <div className="staff-name">{selected.name}</div>
                    </div>
                </div>

                {/* Lĩnh vực nghiên cứu */}
                <div className="staff-detail research-area">
                    <div className="detail-title">Lĩnh vực nghiên cứu</div>
                    <div className="detail-content">
                        {selected.researchAreas.map((area, idx) => (
                            <div key={idx}>{area}</div>
                        ))}
                    </div>
                </div>

                {/* Kinh nghiệm giảng dạy */}
                <div className="staff-detail teaching-experience">
                    <div className="detail-title">Kinh nghiệm giảng dạy</div>
                    <div className="detail-content">
                        {selected.teachingExperience.map((exp, idx) => (
                            <div key={idx}>{exp}</div>
                        ))}
                    </div>
                </div>

            {/* Danh sách giảng viên */}
            <div className="staff-members">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className={`staff-member ${
                            selectedMember === index ? "selected" : ""
                        }`}
                        onClick={() => handleSelectMember(index)}
                    >
                        <div className="member-info">
                            <img
                                className="member-image"
                                src={member.image}
                                alt={member.name}
                            />
                            <div className="member-name">{member.name}</div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </div>
  );
};

export default Staff;

