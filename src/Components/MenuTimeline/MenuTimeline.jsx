import React from 'react';
import './menutimeline.css';

const MenuTimeline = ({ activeDate, onDateClick }) => {
  const handleClick = (date) => {
    if (onDateClick) {
      onDateClick(date);
    }
  };
  const timelineDates = [
    '11/2024',
    '03/2025',
    '04/2025',
    '31/5/2025',
    '1/6/2025',
  ];

  return (
    <div className="timeline">
      {timelineDates.map((date) => (
        <div
          key={date}
          className={`timeline-item ${activeDate === date ? 'active' : ''}`} 
          onClick={() => handleClick(date)}>
          <div className="timeline-date">{date}</div>
          <div className="timeline-line"></div>
        </div>
      ))}
    </div>
  );
};

export default MenuTimeline;
