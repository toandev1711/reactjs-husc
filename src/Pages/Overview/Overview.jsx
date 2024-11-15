import React from 'react'
import './Overview.css'
import Header from '../../Components/Header/Header'

const Overview = () => {
  return (
    <div className='overview-container'>
        <div className='over-background'>
            <img id='background' src="https://minhtoan.blob.core.windows.net/husc/itbackground.jpg" alt="it-background" />
            <div id='over-header'>
              <div className="over-title">
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
              <Header />
            </div>
          
        </div>
    </div>  
  )
}

export default Overview
