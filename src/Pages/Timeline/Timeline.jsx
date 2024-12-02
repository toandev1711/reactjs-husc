import React, { useState, useRef, useEffect } from 'react';
import './Timeline.css';
import MenuTimeline from '../../Components/MenuTimeline/MenuTimeline';
import DetailTimeline from '../../Components/DetailTimeline/DetailTimeline';
import { Element } from 'react-scroll';
const Timeline = () => {
  const [source, setSrc] = useState([
    {position: 1, month: '11', year: '2024', offset: 'target1',  content: 'Cuộc thi thiết kế chào mừng 30 năm thành lập', place: 'Khoa công nghệ thông tin, tầng 2 nhà G, trường ĐH Khoa Học Huế', imgSrc:'https://minhtoan.blob.core.windows.net/husc/phonghoc.jpg'},
    {position: 2, month: '03', year: '2025', offset: 'target2', content: 'Giải bóng đá sinh viên IT cup 2025', place: 'Sân cỏ nhân tạo trường ĐH Luật', imgSrc:require('../../assets/img/school/SanDHLuat.webp')},
    {position: 1, month: '04', year: '2025',offset: 'target3', content: 'Cuộc thi lập trình OLP/ICPC Khoa Công nghệ thông tin', place: 'Trường ĐH Khoa Học Huế', imgSrc:require('../../assets/img/school/SanGiua.jpg')},
    {position: 2, time: '7:30', day: '31', month: '5',offset: 'target4',  year: '2025', content: 'Tổ chức hội thảo liên kết đào tạo và kí kết', place: 'Hội trường A1 Trường ĐH Khoa Học Huế', imgSrc:'https://minhtoan.blob.core.windows.net/husc/santruong2.jpg'},
    {position: 1, time: '14:00', day: '31', month: '5', year: '2025', content: 'Tổ chức hội thảo Khoa học', place: 'Khoa công nghệ thông tin, tầng 2 nhà G, trường ĐH Khoa Học Huế', imgSrc:('https://minhtoan.blob.core.windows.net/husc/santruong9.jpg')},
    {position: 2, time: '18:00', day: '31', month: '5', year: '2025', content: 'Chương trình IT Star và đêm hội âm nhạc', place: 'Sảnh A trường ĐH Khoa Học Huế', imgSrc:('https://minhtoan.blob.core.windows.net/husc/santruong10.jpg')},
    {position: 1, time: '7:30', day: '1', month: '6',offset: 'target5', year: '2025', content: 'Lễ mít tinh kỷ niệm 30 năm thành lập khoa', place: 'Sảnh A trường ĐH Khoa Học Huế', imgSrc:('https://minhtoan.blob.core.windows.net/husc/santruong1.jpg')},
    {position: 2, time: '8:30', day: '1', month: '6', year: '2025', content: 'Chương trình IT Star và đêm hội âm nhạc', place: 'Trường ĐH Khoa Học Huế', imgSrc:('https://minhtoan.blob.core.windows.net/husc/vannghe.jpg')},
    {position: 1, time: '11:00', day: '1', month: '6', year: '2025', content: 'Giao lưu, dự tiệc kỷ niệm thân mật', place: 'Sảnh A trường ĐH Khoa Học Huế', imgSrc:('https://minhtoan.blob.core.windows.net/husc/santruong2.jpg')},
  ]);
 
  return (
    <div className="TimelinePage">
      <div className="grid-container">
        <div className="left-col">
          <MenuTimeline />
        </div>
        <div className="center-col">
          <div className="timeline-details">
            {source.map((item, index) => (
              <Element name={item.offset} key={index}>
                <DetailTimeline
                  content={item.content}
                  day={item.day}
                  time={item.time}
                  month={item.month}
                  year={item.year}
                  position={item.position}
                  place={item.place}
                  imgSrc={item.imgSrc}
                />
              </Element>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
