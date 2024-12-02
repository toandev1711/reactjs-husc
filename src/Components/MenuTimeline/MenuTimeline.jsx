import  React, { useState, useEffect } from 'react';
import './menutimeline.css';
import { Link } from 'react-scroll';

const MenuTimeline = () => {
  const [index, setIndex] = useState('11-2024')
  const handleClick = (date, lat) => {
      setIndex(date);
  };

  const [timelineDates, setTime] = useState([
    {date: '11-2024', lat: 'target1'},
    {date:  '03-2025', lat: 'target2'},
    {date: '04-2025', lat: 'target3'},
    {date: '31-5-2025', lat: 'target4'},
    {date: '1-6-2025', lat: 'target5'},

  ]);

  return (
    <div className="timeline">
      {timelineDates.map((date) => (
        <Link
          to={date.lat}
          className={`timeline-item ${index === date.date ? 'active' : ''}`} 
          onClick={(e) => {
            e.preventDefault()
            handleClick(date.date)
           }}>
          <div className="timeline-date">{date.date}</div>
        </Link>
      ))}
    </div>
);
};

export default MenuTimeline;
