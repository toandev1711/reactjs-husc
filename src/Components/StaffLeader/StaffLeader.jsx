import React from 'react'
import style from './StaffLeader.module.scss'
const StaffLeader = () => {
  return (
    <div className={style.container}>
        <div className={style.Intro}>
            <h1>THẦY TRƯỞNG KHOA</h1>
            <p>Thầy Nguyễn Hoàng Hà, sinh năm 1976, là tiến sĩ chuyên ngành Khoa học Máy tính, hiện công tác tại Bộ môn Công nghệ Phần mềm, Khoa Công nghệ Thông tin, Trường Đại học Khoa học, Đại học Huế. Thầy có nhiều năm kinh nghiệm giảng dạy và nghiên cứu trong lĩnh vực Tin học, với 18 bài báo khoa học, 3 sách - giáo trình và 5 đề tài khoa học. Thầy Hà tốt nghiệp Đại học ngành Tin học vào năm 1999, hoàn thành Thạc sĩ năm 2005 và bảo vệ Tiến sĩ vào năm 2017.</p>
        </div>

        <div className={style.avt}>
            <img src="https://minhtoan.blob.core.windows.net/husc/NguyenHoangHa.png" alt="" />
            <div className={style.background_1}></div>
            <div className={style.background_2}></div>

        </div>
    </div>
  )
}

export default StaffLeader
