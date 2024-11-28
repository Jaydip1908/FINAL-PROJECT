import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfiler from '../../assets/nav-profile.svg'


function Navbar() {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfiler} alt="" className="nav-profile" />
    </div  >
  )
}

export default Navbar