import React, { useState, useEffect } from 'react'
import './Overview.css'
import Header from '../../Components/Header/Header.jsx'
import InfoCard from '../../Components/InfoCard/InfoCard.jsx'
import { AccountCircle, ImportantDevices, CalendarMonth, DisplaySettings } from '@mui/icons-material'
import OverInfo from '../../Components/OverviewInfo/OverInfo.jsx'
import OverviewTraning from '../../Components/OverviewTraning/OverviewTraning.jsx'
import { useFetcher } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
const Overview = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScroll, setIsScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [overviewInfo, setOverviewInfo] = useState([
    {thumb : <AccountCircle />, content: '26 VIÊN CHỨC'},
    {thumb : <ImportantDevices />, content: '3 CHUYÊN NGÀNH'},
    {thumb : <CalendarMonth />, content: '30 NĂM PHÁT TRIỂN'},
  ])
  useEffect(() => {
    if(scrollPosition > 200){
      setIsScroll(true)
    }
    else{
      setIsScroll(false)
    }
  }, [scrollPosition])
  return (
    <div className='overview-container'>
        {
          isScroll ? <Header/> : <div/>
        } 
      
        <div className='over-background'>
            <img id='background' src="https://minhtoan.blob.core.windows.net/husc/itbackground.jpg" alt="it-background" />
            <div id='over-header'>
              <div className= {`over-title ${!isScroll ? 'visible' : 'box hidden'}`}>
                <div className="over-title-left">
                <span>Chào Mừng Kỉ Niệm<br /> <span style={{color: '#EBC351' }}>30 Năm</span> Thành Lập</span>
                </div>
                <span className='breakline'></span>
                <div className="over-title-right">
                  <span>Khoa Công Nghệ Thông Tin </span><br/>
                  <span>Trường Đại học Khoa Học, Huế</span><br/>
                  <span style={{fontSize: '20px'}} className='over-time'>01/06/1995 - 01/06/2025</span>
                </div>
              </div>
              {
                <div 
                  className={`${!isScroll ? 'visible' : 'box hidden'}`}
                  style={{transform: 'translateY(-150%)'}}><Header/></div>
              } 
              <div className={`overview-info fade-box ${!isScroll ? 'visible' : 'hidden'}`}>
                {
                  overviewInfo.map((item)=>(
                    <InfoCard thumb = {item.thumb} content={item.content}/>
                  ))
                }
              </div>
            </div>
        </div>
        <div className="mainContent">
            <OverInfo />
            <OverviewTraning />
        </div>
      <Footer />
    </div>  
  )
}

export default Overview
