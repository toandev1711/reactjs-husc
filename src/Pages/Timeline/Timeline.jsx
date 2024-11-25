import React, { useState, useRef, useEffect } from 'react';
import './Timeline.css';
import MenuTimeline from '../../Components/MenuTimeline/MenuTimeline';
import DetailTimeline from '../../Components/DetailTimeline/DetailTimeline';

const Timeline = () => {
  const [source] = useState([
    {position: 1, month: '11', year: '2024', content: 'Cuộc thi thiết kế chào mừng 30 năm thành lập', place: 'Khoa công nghệ thông tin, tầng 2 nhà G, trường ĐH Khoa Học Huế', imgSrc:require('../../assets/img/school/DayE.jpg')},
    {position: 2, month: '03', year: '2025', content: 'Giải bóng đá sinh viên IT cup 2025', place: 'Sân cỏ nhân tạo trường ĐH Luật', imgSrc:require('../../assets/img/school/SanDHLuat.webp')},
    {position: 1, month: '04', year: '2025', content: 'Cuộc thi lập trình OLP/ICPC Khoa Công nghệ thông tin', place: 'Trường ĐH Khoa Học Huế', imgSrc:require('../../assets/img/school/SanGiua.jpg')},
    {position: 2, time: '7:30', day: '31', month: '5', year: '2025', content: 'Tổ chức hội thảo liên kết đào tạo và kí kết', place: 'Hội trường A1 Trường ĐH Khoa Học Huế', imgSrc:require('../../assets/img/school/DayE.jpg')},
    {position: 1, time: '14:00', day: '31', month: '5', year: '2025', content: 'Tổ chức hội thảo Khoa học', place: 'Khoa công nghệ thông tin, tầng 2 nhà G, trường ĐH Khoa Học Huế', imgSrc:require('../../assets/img/school/DayE.jpg')},
    {position: 2, time: '18:00', day: '31', month: '5', year: '2025', content: 'Chương trình IT Star và đêm hội âm nhạc', place: 'Sảnh A trường ĐH Khoa Học Huế', imgSrc:require('../../assets/img/school/DayE.jpg')},
    {position: 1, time: '7:30', day: '1', month: '6', year: '2025', content: 'Lễ mít tinh kỷ niệm 30 năm thành lập khoa', place: 'Sảnh A trường ĐH Khoa Học Huế', imgSrc:require('../../assets/img/school/DayE.jpg')},
    {position: 2, time: '8:30', day: '1', month: '6', year: '2025', content: 'Chương trình IT Star và đêm hội âm nhạc', place: 'Trường ĐH Khoa Học Huế', imgSrc:require('../../assets/img/school/DayE.jpg')},
    {position: 1, time: '11:00', day: '1', month: '6', year: '2025', content: 'Giao lưu, dự tiệc kỷ niệm thân mật', place: 'Sảnh A trường ĐH Khoa Học Huế', imgSrc:require('../../assets/img/school/DayE.jpg')},
  ]);

  const refs = useRef([]);
  const [activeDate, setActiveDate] = useState('11/2024');

  const handleScrollToDate = (date) => {
    const index = source.findIndex(item => {
      const itemDate = item.day 
        ? `${item.day}/${item.month}/${item.year}` 
        : `${item.month}/${item.year}`;
      return itemDate === date;
    });

    if (index !== -1 && refs.current[index]) {
      refs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveDate(date);
    }
  };

  const handleScroll = () => {
    refs.current.forEach((ref, index) => {

      console.log(refs.current[index]);

    
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          const item = source[index];
          const currentDate = item.day 
            ? `${item.day}/${item.month}/${item.year}` 
            : `${item.month}/${item.year}`;
          setActiveDate(currentDate); 
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="TimelinePage">
      <div className="grid-container">
        <div className="left-col">
          <MenuTimeline activeDate={activeDate} onDateClick={handleScrollToDate} />
        </div>
        <div className="center-col">
          <div className="timeline-details">
            {source.map((item, index) => (
              <div key={index} ref={el => refs.current[index] = el}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
