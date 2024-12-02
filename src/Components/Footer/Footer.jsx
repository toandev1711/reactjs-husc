import React, { useState } from 'react'
import './Footer.css'
import { LocationOn, Phone, Mail, FacebookSharp, CopyrightSharp  } from '@mui/icons-material'

const Footer = () => {
  const [footerElement, setFooterElement] = useState([
    {icon: <LocationOn />, content: '77 Nguyễn Huệ, phường Vĩnh Ninh, Huế', link: 'https://maps.app.goo.gl/ciVwL6WNBn35HGV49'},
    {icon: <Phone />, content: '0234 3826 767', link:''},
    {icon: <Mail />, content: 'khoacntt@husc.edu.vn', link:'https://it.husc.edu.vn/'},
    {icon: <FacebookSharp />, content: 'Facebook link', link: 'https://www.facebook.com/ithusc'},
    {icon: <CopyrightSharp />, content: 'Lê Văn Minh Toàn, Trương Bùi Nguyên Đức',  link:''},

  ])
  const handleClick = (link)=> {
    if(link){
      window.location.href = link
    }
    else{
      window.alert('Chức năng chưa hoàn thiện. Vui lòng thử lại sau')
    }
  }
  return (
    <div className='footer'>
      {footerElement.map((element)=>(
        <div className="footer-element"
            onClick={(e) => {
              e.preventDefault()
              handleClick(element.link)}}>
            {element.icon}
            <div className="content">{element.content}</div>
          </div>
      ))}
    </div>
  )
}

export default Footer