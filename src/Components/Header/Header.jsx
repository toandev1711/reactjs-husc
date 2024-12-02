import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <div className="nav">
            <div className='header-side'>
              <Link className="navLink" to='/overview'>TỔNG QUAN</Link>
              <Link className="navLink" to = '/staff'>CÁN BỘ</Link>
            </div>
            
            <img className='logo' src="https://minhtoan.blob.core.windows.net/husc/Logo_Official.png" alt="" />
            <div className='header-side'>
              <Link className="navLink" to='/mark'>MỐC LỊCH SỬ</Link>
              <Link className="navLink" to = '/timeline'>TIMELINE</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Header
