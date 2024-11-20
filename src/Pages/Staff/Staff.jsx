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

