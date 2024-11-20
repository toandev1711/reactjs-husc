import React from 'react'
import './staffimgthumb.css'

const StaffImgThumb = () => {
  return (
    <div className='staff-img-thumb'>
      <div className='content-top'>
          <div className="header-left-circle" />
          <div className="header-right-circle" />

            <img 
            className="header-image-left" 
            alt="Staff Visual 1" 
            src={require('../../assets/img/teachers/NguyenThiThuyNhi.png')} 
            />

            <img className="header-image-right" 
            alt="Staff Visual 2" 
            src={require('../../assets/img/teachers/NguyenDung.png')} 
            />
      </div>
        
        <div className='content-bottom'>
              <div className="content-left-top-circle" />
              <div className="content-left-bottom-circle" />
                  
              <img 
              className="content-left-image" 
              alt="Staff Visual 3" 
              src={require('../../assets/img/teachers/DoanThiHongPhuoc.png')} 
              />

              <img 
              className="content-left-image-overlay" 
              alt="Staff Visual 4" 
              src={require('../../assets/img/teachers/NguyenDangBinh.png')} 
              />
        </div>
    </div>
  )
}

export default StaffImgThumb
