import React, { useState } from 'react'
import './Footer.css'
import { LocationOn, Phone, Mail, FacebookOutlined  } from '@mui/icons-material'

const Footer = () => {
  const [footerElement, setFooterElement] = useState([
    {icon: <LocationOn />, content: '77 Nguyễn Huệ, phường Vĩnh Ninh, Huế'},
    {icon: <Phone />, content: '0234 3826 767'},
    {icon: <Mail />, content: 'khoacntt@husc.edu.vn'},
    {icon: <FacebookOutlined />, content: 'Facebook link'},

  ])
  return (
    <div className='footer'>
      {footerElement.map((element)=>(
       <div className="footer-element">
          <div className="footer-icon">{element.icon}</div>
          <div className="content">{element.content}</div>
        </div>
      ))}
    </div>
  )
}

export default Footer