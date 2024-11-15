import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <div className="nav">
            <Link className="navLink" to='/overview'>TỔNG QUAN</Link>
            <Link className="navLink" to = '/staff'>NHÂN SỰ</Link>
            <img className='logo' src="https://minhtoan.blob.core.windows.net/husc/Logo_Official.png" alt="" />
            <Link className="navLink" to='/mark'>MỐC LỊCH SỬ</Link>
            <Link className="navLink" to = '/timeline'>TIMELINE</Link>
        </div>
    </div>
  )
}

export default Header
