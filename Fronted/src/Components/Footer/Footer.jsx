import React from 'react'
import './Footer.css'
import footer_logo from '../IMG/logo_big.png'
import instagram_icom from '../IMG/instagram_icon.png'
import pintester_icom from '../IMG/pintester_icon.png'
import watsapp_icom from '../IMG/whatsapp_icon.png'


function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
             <li>Company</li>
             <li>Products</li>
             <li>Offices</li>
             <li>About</li>
             <li>Contact</li>
        </ul>
        <div className="footer-icon">
            <div className="footer-icon-container">
                <img src={instagram_icom} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icom} alt="" />
            </div>  <div className="footer-icon-container">
                <img src={watsapp_icom} alt="" />
            </div>
        </div>
        <div className="footer-copyrigth">
            <hr />
            <p>Copyrigth @ 2024 - All Rigth Reserved.</p>
        </div>
   </div>
  )
}

export default Footer